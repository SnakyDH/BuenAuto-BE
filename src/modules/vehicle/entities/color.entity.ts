import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('color')
export class ColorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @OneToMany(() => ColorEntity, (color) => color.vehicles)
  vehicles: ColorEntity[];
}
