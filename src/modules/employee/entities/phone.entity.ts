import { Entity, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity('phone_employee')
export class PhoneEntity {
  @OneToOne(() => EmployeeEntity, { cascade: true, eager: true })
  @JoinColumn()
  employee: EmployeeEntity;

  @PrimaryColumn({ length: 15 })
  number: string;
}
