import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LineEntity } from './line.entity';

@Entity('brand')
export class BrandEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @OneToMany(() => LineEntity, (line) => line.brand)
  lines: LineEntity[];
}
