import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty({
    description: 'Branch name',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Branch city',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  city: string;
}
