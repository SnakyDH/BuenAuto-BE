import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity('phone_client')
export class PhoneEntity {
  @PrimaryColumn({ name: 'client_id' })
  clientId: string;

  @OneToOne(() => ClientEntity)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;

  @PrimaryColumn({ length: 15 })
  number: string;
}
