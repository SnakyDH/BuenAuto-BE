import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from './type.enum';
import { TransactionEntity } from './transaction.entity';

@Entity('type_transaction')
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: Type;
  @OneToMany(() => TransactionEntity, (transaction) => transaction.type)
  transactions: TransactionEntity[];
}
