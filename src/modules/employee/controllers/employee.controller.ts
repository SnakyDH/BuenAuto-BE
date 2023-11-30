import { Controller, Get, Post, Put } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';

@Controller('employee')
export class EmployeeController {
  /*   constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  async getAll() {
    return await this.employeeService.getAll();
  }
  @Post()
  async create() {
    return await this.employeeService.create();
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
  } */
}
