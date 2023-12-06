import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { Repository } from 'typeorm';
import { VehicleDto } from '../dtos/vehicle.dto';
import { TypeService } from './type.service';
import { ColorService } from './color.service';
import { BrandService } from './brand.service';
import { LineService } from './line.service';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly repo: Repository<VehicleEntity>,
    private readonly typeService: TypeService,
    private readonly colorService: ColorService,
    private readonly brandService: BrandService,
    private readonly lineService: LineService,
  ) {}

  async getAllVehicles() {
    const result = await this.repo.query(
      'SELECT v.id, v.model, v.chassis, v.plate, l.name AS linea, b.name as MARCA, c.name AS COLOR, v.value FROM vehicle v JOIN line l ON (v.line_id=l.id) JOIN brand b ON (l."brandId"=b.id) JOIN color c ON (v.color_id=c.id) JOIN type_vehicle ty ON (v.type_id=ty.id);',
    );
    console.log(result); //Comprobar en pantalla
    return result;
  }
  async getOne(id: String) {
    const rquery = await this.repo.query(
      `SELECT v.id, v.model, v.chassis, v.plate, l.name AS linea, b.name as MARCA, c.name AS COLOR, v.value FROM vehicle v JOIN line l ON (v.line_id=l.id) JOIN brand b ON (l."brandId"=b.id) JOIN color c ON (v.color_id=c.id) JOIN type_vehicle ty ON (v.type_id=ty.id) WHERE v.id='${id}';`,
    );
    return rquery;
  }
  async createVehicle(body: VehicleDto) {
    //Verificar-Añadir tipo de vehiculo
    let typeExists = await this.typeService.getId(body.type);
    if (!typeExists) {
      const createNewType = await this.typeService.createType(body.type);
      typeExists = await this.typeService.getId(body.type);
    }
    //Verificar - añadir color
    let colorExists = await this.colorService.getId(body.color.name);
    if (!colorExists) {
      const createColor = await this.colorService.createColor(body.color);
      colorExists = await this.colorService.getId(body.color.name);
    }
    //Verificar - añadir marca
    let brandExists = await this.brandService.getId(body.brand.name);
    if (!brandExists) {
      const createBrand = await this.brandService.createBrand(body.brand);
      brandExists = await this.brandService.getId(body.brand.name);
    }
    //Verificar - Añadir linea
    let lineExists = await this.lineService.getId(body.line.name);
    if (!lineExists) {
      const createBrand = await this.lineService.createLine(body.line);
      lineExists = await this.lineService.getId(body.line.name);
    }
    const createVehicle = await this.repo.query(
      `INSERT INTO vehicle (model,chassis,plate,value,line_id,color_id,type_id) 
      VALUES ('${body.model}','${body.chassis}','${body.plate}','${body.value}','${lineExists[0].id}','${colorExists[0].id}','${typeExists[0].id}')`,
    );
    return;
  }
}
