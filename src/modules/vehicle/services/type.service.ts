import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeEntity } from '../entities/type.entity';
import { Type } from '../domain/type.enum';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private readonly repo: Repository<TypeEntity>,
  ) {}

  async getId(name: Type) {
    const result = await this.repo.query(
      `SELECT id FROM type_vehicle WHERE name='${name}'`,
    );
    return result;
  }

  async createType(body: Type) {
    const result = await this.repo.query(
      `INSERT INTO type_vehicle (name) VALUES ('${body}');`,
    );
    return result;
  }
}
