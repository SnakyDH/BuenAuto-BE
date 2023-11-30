import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeEntity } from './type.entity';
import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { BranchEntity } from 'src/modules/branch/entities/branch.entity';

@Entity('transaction')
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({ type: 'double precision' })
  totalValue: number;

  @ManyToOne(() => TypeEntity, (type) => type.transactions)
  type: TypeEntity;

  @ManyToOne(() => ClientEntity, (client) => client.transactions)
  client: ClientEntity;

  @ManyToOne(() => BranchEntity, (branch) => branch.transactions)
  branch: BranchEntity;
}
