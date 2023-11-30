import { Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity('phone_client')
export class PhoneEntity {
  @OneToOne(() => ClientEntity, (client) => client.id)
  idClient: number;

  @PrimaryColumn({ length: 15 })
  number: string;
}
