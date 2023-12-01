import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { Repository } from 'typeorm';
import { VehicleDto } from '../dtos/vehicle.dto';
import { TypeService } from './type.service';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly repo: Repository<VehicleEntity>,
    private readonly typeService: TypeService,
  ) {}

  async getAllVehicles() {
    const result = await this.repo.query('Select * from client;');
    console.log(result); //Comprobar en pantalla
    return result;
  }
  async createVehicle(body: VehicleDto) {
    const typeExists = await this.typeService.getId(body.type);
    /*if(!typeExists){
        const createNewType= await this.typeService.createType(body.type);
    }
    return */
  }
}
