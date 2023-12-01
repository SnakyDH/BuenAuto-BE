import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { PositionEntity } from './position.entity';
import { BranchEntity } from 'src/modules/branch/entities/branch.entity';
import { Role } from '../domain/role.enum';
import { PhoneEntity } from './phone.entity';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  code: number;

  @PrimaryColumn({ length: 10, unique: true })
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  role: Role;
  @Column({ length: 256 })
  password: string;

  @Column({
    type: 'double precision',
  })
  salary: number;

  @Column({ name: 'birth_date' })
  birth: Date;

  // todo: using integrity restrictions
  @CreateDateColumn({ name: 'admission_date' })
  createdAt: Date;

  @ManyToOne(() => PositionEntity, (position) => position.idPosition)
  @JoinColumn({ name: 'position_id' })
  position: PositionEntity;

  @ManyToOne(() => BranchEntity, (branch) => branch.id)
  @JoinColumn({ name: 'branch_id' })
  branch: BranchEntity;

  @OneToOne(() => PhoneEntity, { cascade: true, eager: true })
  phone: PhoneEntity;
}
