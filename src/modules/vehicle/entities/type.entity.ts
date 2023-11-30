import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from '../domain/type.enum';

@Entity('type')
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: Type;

  @OneToMany(() => TypeEntity, (type) => type.vehicles)
  vehicles: TypeEntity[];
}
