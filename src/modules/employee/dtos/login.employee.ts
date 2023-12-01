import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Employee code',
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  code: number;

  @ApiProperty({
    description: "Employee's password",
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
