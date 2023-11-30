import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity('position_employee')
export class PositionEntity {
  @PrimaryGeneratedColumn({ name: 'id_position' })
  idPosition: number;

  @Column({ length: 50 })
  name: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.code)
  employee: EmployeeEntity;
}
