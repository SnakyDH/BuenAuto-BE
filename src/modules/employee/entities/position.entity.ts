import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity('position_employee')
export class PositionEntity {
  @PrimaryGeneratedColumn({ name: 'id_position' })
  idPosition: number;

  @Column({ length: 50 })
  name: string;

  @OneToMany(() => EmployeeEntity, (employee) => employee.code)
  employee: EmployeeEntity[];
}
