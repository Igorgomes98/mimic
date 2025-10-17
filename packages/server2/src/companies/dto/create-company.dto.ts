import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ example: 'Empresa XYZ', description: 'Nome da empresa' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'contato@empresa.com', description: 'Email da empresa' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '(11) 98765-4321', description: 'Telefone da empresa', required: false })
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: '12.345.678/0001-90', description: 'CNPJ da empresa', required: false })
  @IsOptional()
  cnpj?: string;

  @ApiProperty({ 
    example: { street: 'Rua ABC', number: '123', city: 'São Paulo', state: 'SP' }, 
    description: 'Endereço da empresa', 
    required: false 
  })
  @IsOptional()
  address?: Record<string, any>;

  @ApiProperty({ example: true, description: 'Indica se a empresa está ativa', default: true })
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
