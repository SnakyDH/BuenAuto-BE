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
