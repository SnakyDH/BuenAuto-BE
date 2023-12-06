import { Controller, Get, Post } from '@nestjs/common';
import { BranchService } from '../services/branch.service';

@Controller('controllers')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get()
  getAll() {
    return this.branchService.getAllBranchs();
  }
}
