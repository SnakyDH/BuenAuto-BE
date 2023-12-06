import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from '../entities/client.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from '../dtos/create.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly repo: Repository<ClientEntity>,
  ) {}

  async getAllClients() {
    const result = await this.repo.query(
      'SELECT c.id, c.name, c.city, c.created_date, b.name as sucursal FROM client c JOIN branch b ON (c.branch_id=b.id);',
    );
    console.log(result); //Comprobar en pantalla
    return result;
  }

  async getOne(id: string) {
    const rquery = await this.repo.query(
      `SELECT c.id, c.name, c.city, c.created_date, b.name as "Sucursal", p.number FROM client c 
      JOIN branch b ON(c."branchId"=b.id) 
      JOIN phone_client p ON (c.id=p.id) 
      WHERE c.id='${id}';`,
    );
    return rquery;
  }

  async create(body: CreateClientDto) {
    const aux = await this.repo.query(
      `SELECT id FROM branch where name='${body.branchName}'`,
    );
    const rquery = await this.repo.query(
      `INSERT INTO client (id,name,city,branch_id) VALUES ('${body.id}','${body.name}','${body.city}','${aux[0].id}');`,
    );
    const rpquery = await this.repo.query(
      `INSERT INTO phone_client VALUES ('${body.id}','${body.phone}');`,
    );
    console.log(rpquery);
  }

  async update(body: CreateClientDto) {
    const rquery = await this.repo.query(
      `UPDATE client set name='${body.name}', city='${body.city}' where id='${body.id}';`,
    );
  }

  async updatePhone(body: CreateClientDto) {
    const rquery = await this.repo.query(
      `UPDATE phone_client set number='${body.phone}' where id='${body.id}';`,
    );
  }
}
