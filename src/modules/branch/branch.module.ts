import { Module } from '@nestjs/common';
import { BranchService } from './services/branch.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchEntity } from './entities/branch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BranchEntity])],
  providers: [BranchService],
  exports: [BranchService],
})
export class BranchModule {}
