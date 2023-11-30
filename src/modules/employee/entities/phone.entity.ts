import { Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity('phone_employee')
export class PhoneEntity {
  @OneToOne(() => EmployeeEntity, (employee) => employee.code)
  code_employee: number;

  @OneToOne(() => EmployeeEntity, (employee) => employee.phone)
  employee: EmployeeEntity;

  @PrimaryColumn({ length: 15 })
  number: string;
}
