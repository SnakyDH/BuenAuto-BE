import { Module } from '@nestjs/common';
import { BranchService } from './services/branch.service';

@Module({
  providers: [BranchService],
})
export class BranchModule {}
