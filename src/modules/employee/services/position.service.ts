import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionEntity } from '../entities/position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly repo: Repository<PositionEntity>,
  ) {}

  findPositionByName(name: string): Promise<PositionEntity | null> {
    return this.repo.findOne({
      where: { name },
    });
  }
  async positionExists(name: string): Promise<PositionEntity | null> {
    const position = await this.findPositionByName(name);
    if (!position) {
      return position;
    }
    return position;
  }
  savePosition(name: string): Promise<PositionEntity> {
    return this.repo.save({ name });
  }
  findAll(): Promise<PositionEntity[]> {
    return this.repo.find();
  }
}
