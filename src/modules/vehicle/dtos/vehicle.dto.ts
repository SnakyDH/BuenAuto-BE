import { Type } from '../domain/type.enum';

export class VehicleDto {
  id: number;
  model: number;
  chassis: string;
  plate: string;
  line: string;
  color: string;
  type: Type;
}
