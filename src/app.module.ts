import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDataBaseConfig } from './config/db.config';
import { EmployeeModule } from './modules/employee/employee.module';
import { BranchModule } from './modules/branch/branch.module';
import { ClientModule } from './modules/client/client.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(getDataBaseConfig()),
    AuthModule,
    EmployeeModule,
    BranchModule,
    ClientModule,
    TransactionsModule,
    VehicleModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
