import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';

export class BulkProductItemDto {
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

  @ApiProperty({ example: 99.9 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 'Nome do Fornecedor', required: false })
  @IsOptional()
  @IsString()
  supplier_name?: string;
}

export class BulkCreateProductDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({
    type: [BulkProductItemDto],
    description: 'Array de produtos para importação em lote',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkProductItemDto)
  products: BulkProductItemDto[];
}

export class BulkCreateProductResultDto {
  @ApiProperty({ example: 5 })
  total: number;

  @ApiProperty({ example: 4 })
  success: number;

  @ApiProperty({ example: 1 })
  failed: number;

  @ApiProperty({ type: [Object] })
  created: object[];

  @ApiProperty({ type: [Object] })
  errors: { index: number; error: string; data: BulkProductItemDto }[];
}
