import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../interfaces/employee';
//: Promise<Employee[]>*/
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  async getAll() {
    const employees = this.employeeService.getAll();
    if (!employees) {
      throw new NotFoundException('No employees found');
    }
    return employees;
  }
  @Post()
  async create(@Body() employee: Employee) {
    return await this.employeeService.create(employee);
  }
  @Put()
  async update() {
    return await this.employeeService.update();
  }
  @Get('positions')
  async getPositions() {
    return await this.employeeService.getPositions();
  }
  @Put('dismiss')
  async dismiss() {
    return await this.employeeService.dismiss();
  }
}
