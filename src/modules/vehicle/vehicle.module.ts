import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleEntity } from './entities/vehicle.entity';
import { VehicleController } from './controller/vehicle.controller';
import { VehicleService } from './services/vehicle.service';
import { ColorEntity } from './entities/color.entity';
import { LineEntity } from './entities/line.entity';
import { TypeEntity } from './entities/type.entity';
import { ColorService } from './services/color.service';
import { LineService } from './services/line.service';
import { TypeService } from './services/type.service';
import { BrandEntity } from './entities/brand.entity';
import { BrandService } from './services/brand.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VehicleEntity,
      ColorEntity,
      LineEntity,
      TypeEntity,
      BrandEntity,
    ]),
  ],
  controllers: [VehicleController],
  providers: [
    VehicleService,
    ColorService,
    LineService,
    TypeService,
    BrandService,
  ],
})
export class VehicleModule {}
