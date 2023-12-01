import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsNumber,
} from 'class-validator';
import { Role } from 'src/modules/employee/domain/role.enum';

export class registerEmployeeDto {
  @ApiProperty({
    description: 'Employee cc or id',
    type: String,
    minLength: 3,
    maxLength: 10,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  id: string;

  @ApiProperty({
    description: 'Employee name',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Date of birth',
    type: Date,
    required: true,
  })
  @IsNotEmpty()
  birth: Date;

  @ApiProperty({
    description: "Employee's position",
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({
    description: "Employee's salary",
    type: Number,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @ApiProperty({
    description: "Employee's password",
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: "Employee's password confirmation",
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  passwordConfirmation: string;

  @ApiProperty({
    description: "Employee's phone number",
    type: Number,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: "Employee's branch",
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  branch: {
    name: string;
    city: string;
  };

  @ApiProperty({
    description: "Employee's role",
    type: String,
    required: true,
  })
  @IsString()
  role: Role;
}
