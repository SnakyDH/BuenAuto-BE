import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { EmployeeEntity } from 'src/modules/employee/entities/employee.entity';
import { TransactionEntity } from 'src/modules/transactions/entities/transaction.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('branch')
export class BranchEntity {
  @PrimaryColumn()
  id: string;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45 })
  city: string;

  @OneToMany(() => EmployeeEntity, (employee) => employee.branch)
  employee: EmployeeEntity[];

  @OneToMany(() => ClientEntity, (client) => client.branch)
  client: ClientEntity[];

  @OneToMany(() => TransactionEntity, (transaction) => transaction.branch)
  transactions: TransactionEntity[];
}
