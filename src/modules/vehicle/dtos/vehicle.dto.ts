import { Type } from '../domain/type.enum';
import { brandDto } from './brand.dto';
import { colorDto } from './color.dto';
import { lineDto } from './line.dto';

export class VehicleDto {
  id: number;
  model: number;
  chassis: string;
  plate: string;
  value: number;
  brand: brandDto;
  line: lineDto;
  color: colorDto;
  type: Type;
}
