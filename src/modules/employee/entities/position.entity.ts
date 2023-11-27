import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('position')
export class PositionEntity {
  @PrimaryGeneratedColumn()
  id_position: number;

  @Column({ length: 50 })
  name: string;
}
