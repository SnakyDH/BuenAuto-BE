import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VehicleService } from '../services/vehicle.service';
import { BrandService } from '../services/brand.service';
import { brandDto } from '../dtos/brand.dto';
import { LineService } from '../services/line.service';
import { lineDto } from '../dtos/line.dto';
import { ColorService } from '../services/color.service';
import { colorDto } from '../dtos/color.dto';
import { VehicleDto } from '../dtos/vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(
    private readonly vehicleService: VehicleService,
    private readonly brandService: BrandService,
    private readonly lineService: LineService,
    private readonly colorService: ColorService,
  ) {}

  //Marca
  @Get('brands')
  getBrands() {
    return this.brandService.getAllBrands();
  }
  @Post('NewBrand')
  createBrand(@Body() body: brandDto) {
    return this.brandService.createBrand(body);
  }

  //Linea
  @Get('lines')
  getLines() {
    return this.lineService.getAllLines();
  }
  @Get('line/:name')
  getOne(@Param('name') name: string) {
    return this.lineService.getLinesBrand(name);
  }

  @Post('NewLine')
  createLine(@Body() body: lineDto) {
    return this.lineService.createLine(body);
  }
  //Color
  @Get('colors')
  getColor() {
    return this.colorService.getAllColors();
  }
  @Post('NewColor')
  createColor(@Body() body: colorDto) {
    return this.colorService.createColor(body);
  }
  //Nuevo vehiculo
  @Post('new')
  createVehicle(@Body() body: VehicleDto) {
    return this.vehicleService.createVehicle(body);
  }
  //Consular todos los vehiculos
  @Get()
  getAllVehicle() {
    return this.vehicleService.getAllVehicles();
  }
  //Consultar un vehiculo
  @Get(':id')
  getOneVehicle(@Param('id') id: string) {
    return this.vehicleService.getOne(id);
  }
}
