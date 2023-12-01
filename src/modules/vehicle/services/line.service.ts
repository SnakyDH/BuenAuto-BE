import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LineEntity } from '../entities/line.entity';
import { BrandService } from './brand.service';
import { lineDto } from '../dtos/line.dto';

@Injectable()
export class LineService {
  constructor(
    @InjectRepository(LineEntity)
    private readonly repo: Repository<LineEntity>,
    private readonly brandService: BrandService,
  ) {}

  async getAllLines() {
    const result = await this.repo.query('SELECT * FROM line;'); //Comprobar en pantalla
    return result;
  }

  async getId(name: string) {
    const result = await this.repo.query(
      `SELECT id FROM line WHERE name='${name}'`,
    );
    return result;
  }

  async getLinesBrand(name: string) {
    const brandid = await this.brandService.getId(name);
    const result = await this.repo.query(
      `SELECT * FROM line WHERE "brandId"='${brandid[0].id}'`,
    );
    return result;
  }

  async createLine(body: lineDto) {
    const brandid = await this.brandService.getId(body.brandName);
    const rquery = await this.repo.query(
      `INSERT INTO line (name,"brandId") VALUES ('${body.name}',${brandid[0].id})`,
    );
    return rquery;
  }
}
