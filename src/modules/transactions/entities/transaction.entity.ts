import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from './type.entity';
import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { BranchEntity } from 'src/modules/branch/entities/branch.entity';
import { VehicleEntity } from '../../vehicle/entities/vehicle.entity';

@Entity('transaction')
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({ type: 'double precision' })
  totalValue: number;

  @ManyToOne(() => TypeEntity, (type) => type.transactions)
  @JoinColumn({ name: 'type_id' })
  type: TypeEntity;

  @ManyToOne(() => ClientEntity, (client) => client.transactions)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;

  @ManyToOne(() => BranchEntity, (branch) => branch.transactions)
  @JoinColumn({ name: 'branch_id' })
  branch: BranchEntity;

  @ManyToMany(() => VehicleEntity, (vehicle) => vehicle.transactions)
  @JoinTable({
    name: 'transaction_vehicle',
    joinColumn: { name: 'transaction_id' },
    inverseJoinColumn: { name: 'vehicle_id' },
  })
  vehicles: VehicleEntity[];
}
