import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { Repository } from 'typeorm';
import { Employee } from '../interfaces/employee';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly repo: Repository<EmployeeEntity>,
  ) {}
  async getAll() {
    return await this.repo.find();
  }
  async create(employee: Employee) {
    console.log(employee);
    //this.repo.save(employee);
  }
  async update() {
    return {};
  }
  async getPositions() {
    return this.repo.find;
  }
  async dismiss() {
    return {};
  }
}
