import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  code: number;

  @Column({ length: 10, unique: true })
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 256 })
  password: string;

  @Column()
  salary: number;

  @Column()
  birth: Date;

  // todo: using integrity restrictions
  @Column()
  createdAt: Date;
}
