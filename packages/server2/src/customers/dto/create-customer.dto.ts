import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsEmail, IsEnum, IsDateString } from 'class-validator';

export enum CustomerType {
  CLIENTE = 'CLIENTE',
  REVENDEDOR = 'REVENDEDOR',
}

export class CreateCustomerDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({ example: 'João Silva' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'joao@example.com', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: '(11) 98765-4321', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: '123.456.789-00', required: false })
  @IsOptional()
  @IsString()
  document?: string;

  @ApiProperty({ example: 'Rua ABC, 123', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ enum: CustomerType, example: CustomerType.CLIENTE, required: false })
  @IsOptional()
  @IsEnum(CustomerType)
  customer_type?: CustomerType;

  @ApiProperty({ example: '1990-01-15T00:00:00.000Z', required: false })
  @IsOptional()
  @IsDateString()
  birthdate?: string;
}
