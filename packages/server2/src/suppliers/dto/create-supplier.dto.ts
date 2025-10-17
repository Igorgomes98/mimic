import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsEmail } from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({ example: 'Fornecedor ABC' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'contato@fornecedor.com', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: '(11) 98765-4321', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'Rua XYZ, 123', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ example: 'João Silva', required: false })
  @IsOptional()
  @IsString()
  contact_name?: string;

  @ApiProperty({ example: 'https://fornecedor.com', required: false })
  @IsOptional()
  @IsString()
  website?: string;
}
