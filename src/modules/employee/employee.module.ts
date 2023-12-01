import { Module } from '@nestjs/common';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeService } from './services/employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './entities/employee.entity';
import { PhoneEntity } from './entities/phone.entity';
import { PositionEntity } from './entities/position.entity';
import { PositionService } from './services/position.service';
import { BranchService } from '../branch/services/branch.service';
import { BranchEntity } from '../branch/entities/branch.entity';
import { BranchModule } from '../branch/branch.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      EmployeeEntity,
      PhoneEntity,
      PositionEntity,
      BranchEntity,
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, PositionService, BranchService],
})
export class EmployeeModule {}
