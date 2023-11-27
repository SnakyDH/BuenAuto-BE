import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { ServicesService } from './services/services.service';
import { ServicesController } from './services/services.controller';
import { Controller } from './controllers/.controller';

@Module({
  controllers: [EmployeeController, ServicesController, Controller],
  providers: [EmployeeService, ServicesService]
})
export class EmployeeModule {}
