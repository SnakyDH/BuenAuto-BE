import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { ClientController } from './controller/client.controller';
import { ClientService } from './services/cliente.service';
import { PhoneEntity } from './entities/phone.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, PhoneEntity])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
