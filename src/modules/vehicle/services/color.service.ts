import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColorEntity } from '../entities/color.entity';
import { colorDto } from '../dtos/color.dto';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(ColorEntity)
    private readonly repo: Repository<ColorEntity>,
  ) {}

  async getAllColors() {
    const result = await this.repo.query('SELEC * FROM color;');
    return result;
  }

  async getId(name: string) {
    const result = await this.repo.query(
      `SELECT id FROM color WHERE name='${name}'`,
    );
    return result;
  }

  async createColor(body: colorDto) {
    const rquery = await this.repo.query(
      `INSERT INTO color (name) VALUES ('${body.name}')`,
    );
    return rquery;
  }
}
