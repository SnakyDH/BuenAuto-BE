import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LineEntity } from './line.entity';
import { ColorEntity } from './color.entity';
import { TypeEntity } from './type.entity';

@Entity('vehicle')
export class VehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: number;

  @Column({ length: 45 })
  chassis: string;

  @Column({ length: 7 })
  plate: string;

  @Column({ type: 'double precision' })
  value: number;

  @ManyToOne(() => LineEntity, (line) => line.vehicles)
  line: LineEntity;

  @ManyToOne(() => ColorEntity, (color) => color.vehicles)
  color: ColorEntity;

  @ManyToOne(() => TypeEntity, (type) => type.vehicles)
  type: TypeEntity;
}
