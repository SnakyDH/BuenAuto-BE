import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { Repository } from 'typeorm';
import { registerEmployeeDto } from '../dtos/register.employee';
import { PositionService } from './position.service';
import { PositionEntity } from '../entities/position.entity';
import { BranchService } from 'src/modules/branch/services/branch.service';
import { BranchEntity } from 'src/modules/branch/entities/branch.entity';
import { CreateBranchDto } from 'src/modules/branch/dtos/create.dto';
import { hash } from 'bcrypt';
@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly repo: Repository<EmployeeEntity>,
    private readonly positionService: PositionService,
    private readonly branchService: BranchService,
  ) {}
  async getAll() {
    return await this.repo.find();
  }
  async create(employeeDto: registerEmployeeDto) {
    try {
      let position: string | PositionEntity = employeeDto.position;
      let branch: CreateBranchDto | BranchEntity = employeeDto.branch;
      const employeeExist = await this.repo
        .createQueryBuilder('employee')
        .select('employee.id')
        .where('employee.id = :id', { id: employeeDto.id })
        .getOne();
      if (employeeExist) {
        return new BadRequestException('employee already exists');
      }
      if (employeeDto.password !== employeeDto.passwordConfirmation) {
        return new BadRequestException('passwords do not match');
      }
      employeeDto.password = await this.hashPassword(employeeDto.password);
      const positionExists = await this.positionService.positionExists(
        employeeDto.position,
      );
      if (!positionExists) {
        position = await this.positionService.savePosition(
          employeeDto.position,
        );
      }
      if (positionExists) {
        position = positionExists;
      }
      const branchExists = await this.branchService.branchExists(
        employeeDto.branch.name,
      );

      if (!branchExists) {
        branch = await this.branchService.save({
          city: employeeDto.branch.city,
          name: employeeDto.branch.name,
        });
      }
      if (branchExists) {
        branch = branchExists;
      }
      const employeeE = new EmployeeEntity();
      employeeE.id = employeeDto.id;
      employeeE.name = employeeDto.name;
      employeeE.role = employeeDto.role;
      employeeE.password = employeeDto.password;
      employeeE.salary = employeeDto.salary;
      employeeE.birth = employeeDto.birth;
      if (typeof position === 'string') {
        position = await this.positionService.savePosition(position);
      }

      if (branch instanceof CreateBranchDto) {
        branch = new BranchEntity();
        branch.name = branch.name;
        branch.city = branch.city;
        branch = await this.branchService.save(branch);
      }
      employeeE.position = position;
      const employeeSaved = await this.repo.save(employeeE);
      return { ...employeeSaved, password: '' };
    } catch (e) {
      console.error(e);
      throw new HttpException(e, 500);
    }
  }
  async findById(id: string): Promise<EmployeeEntity | null> {
    return this.repo.findOne({
      where: { id },
    });
  }
  async getPositions() {
    return this.positionService.findAll();
  }
  async update() {
    return {};
  }
  async dismiss() {
    return {};
  }
  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }
}
