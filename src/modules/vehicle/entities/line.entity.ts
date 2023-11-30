import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BrandEntity } from './brand.entity';
import { VehicleEntity } from './vehicle.entity';

@Entity('line')
export class LineEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @ManyToOne(() => BrandEntity, (brand) => brand.lines)
  brand: BrandEntity;

  @OneToMany(() => VehicleEntity, (vehicle) => vehicle.line)
  vehicles: VehicleEntity[];
}
