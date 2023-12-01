import {
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity('phone_client')
export class PhoneEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => ClientEntity)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;

  @PrimaryColumn({ length: 15 })
  number: string;
}
