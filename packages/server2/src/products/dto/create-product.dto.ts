import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min, IsOptional, IsUUID } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({ example: 'uuid-do-supplier', required: false })
  @IsUUID('4')
  @IsOptional()
  supplier_id?: string;

  @ApiProperty({ example: 'Produto XYZ' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Descrição do produto', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'SKU001', required: false })
  @IsOptional()
  @IsString()
  sku?: string;

  @ApiProperty({ example: 99.90 })
  @IsNumber()
  @Min(0)
  price: number;
}
