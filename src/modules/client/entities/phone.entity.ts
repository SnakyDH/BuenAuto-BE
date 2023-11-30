import { Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity('phone_client')
export class PhoneEntity {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => ClientEntity, (client) => client.phone)
  client: ClientEntity;

  @PrimaryColumn({ length: 15 })
  number: string;
}
