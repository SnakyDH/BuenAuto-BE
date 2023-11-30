import { BranchEntity } from 'src/modules/branch/entities/branch.entity';
import { TransactionEntity } from 'src/modules/transactions/entities/transaction.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

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
  branch: BranchEntity;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.client)
  transactions: TransactionEntity[];
}
