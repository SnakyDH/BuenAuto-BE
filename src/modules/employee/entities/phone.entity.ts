import { Entity, PrimaryColumn } from 'typeorm';

@Entity('phone')
export class PhoneEntity {
  @PrimaryColumn()
  code_employee: number;

  @PrimaryColumn({ length: 15 })
  number: string;
}
