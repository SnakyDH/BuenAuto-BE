import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LineEntity } from './line.entity';
import { ColorEntity } from './color.entity';
import { TypeEntity } from './type.entity';
import { TransactionEntity } from 'src/modules/transactions/entities/transaction.entity';

@Entity('vehicle')
export class VehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: number;

  @Column({ length: 45 })
  chassis: string;

  @Column({ length: 7 })
  plate: string;

  @Column({ type: 'double precision' })
  value: number;

  @ManyToOne(() => LineEntity, (line) => line.vehicles)
  @JoinColumn({ name: 'line_id' })
  line: LineEntity;

  @ManyToOne(() => ColorEntity, (color) => color.vehicles)
  @JoinColumn({ name: 'color_id' })
  color: ColorEntity;

  @ManyToOne(() => TypeEntity, (type) => type.vehicles)
  @JoinColumn({ name: 'type_id' })
  type: TypeEntity;

  @ManyToMany(() => TransactionEntity, (transaction) => transaction.vehicles)
  transactions: TransactionEntity[];
}
