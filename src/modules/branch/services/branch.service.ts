import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BranchEntity } from '../entities/branch.entity';
import { Repository } from 'typeorm';
import { CreateBranchDto } from '../dtos/create.dto';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(BranchEntity)
    private readonly repo: Repository<BranchEntity>,
  ) {}
  async getAllBranchs() {
    const result = await this.repo.query('SELECT b.name,b.city FROM branch b;');
    console.log(result); //Comprobar en pantalla
    return result;
  }
  findBranchByName(name: string): Promise<BranchEntity | null> {
    return this.repo.findOne({
      where: { name },
    });
  }
  branchExists(name: string): Promise<BranchEntity | null> {
    return this.findBranchByName(name);
  }
  save(branch: CreateBranchDto): Promise<BranchEntity> {
    return this.repo.save(branch);
  }
}
