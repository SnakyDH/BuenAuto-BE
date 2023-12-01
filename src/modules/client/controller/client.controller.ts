import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { ClientService } from '../services/cliente.service';
import { CreateClientDto } from '../dtos/create.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getAll() {
    return this.clientService.getAllClients();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.clientService.getOne(id);
  }

  @Get('news')
  getReport() {
    return;
  }

  @Post()
  create(@Body() body: CreateClientDto) {
    this.clientService.create(body);
  }
  @Put()
  update(@Body() body: CreateClientDto) {
    this.clientService.update(body);
  }
  @Put('phone')
  updatePhone(@Body() body: CreateClientDto) {
    this.clientService.updatePhone(body);
  }
}
