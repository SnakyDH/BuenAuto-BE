import { BranchEntity } from 'src/modules/branch/entities/branch.entity';
import { TransactionEntity } from 'src/modules/transactions/entities/transaction.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { PhoneEntity } from './phone.entity';

@Entity('client')
export class ClientEntity {
  @PrimaryColumn({ length: 10, unique: true })
  id: string;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45 })
  city: string;

  @CreateDateColumn({ name: 'created_date' })
  createdAt: Date;

  @ManyToOne(() => BranchEntity, (branch) => branch.client)
  @JoinColumn({ name: 'branch_id' })
  branch: BranchEntity;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.client)
  transactions: TransactionEntity[];

  @OneToOne(() => PhoneEntity, (phone) => phone.client)
  phone: PhoneEntity;
}
