import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrandEntity } from '../entities/brand.entity';
import { brandDto } from '../dtos/brand.dto';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(BrandEntity)
    private readonly repo: Repository<BrandEntity>,
  ) {}

  async getAllBrands() {
    const result = await this.repo.query('SELECT * FROM brand;'); //Comprobar en pantalla
    return result;
  }

  async getId(name: string) {
    const result = await this.repo.query(
      `SELECT id FROM brand WHERE name='${name}'`,
    );
    return result;
  }

  async createBrand(body: brandDto) {
    const rquery = await this.repo.query(
      `INSERT INTO brand (name) VALUES ('${body.name}')`,
    );
    return rquery;
  }
}
