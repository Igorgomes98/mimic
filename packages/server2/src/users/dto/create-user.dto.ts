import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsUUID, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'João Silva' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'joao@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123', minLength: 6 })
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'uuid-do-role' })
  @IsUUID('4')
  roleId: string;

  @ApiProperty({ example: 'uuid-da-company', required: false })
  @IsUUID('4')
  @IsOptional()
  companyId?: string;
}
