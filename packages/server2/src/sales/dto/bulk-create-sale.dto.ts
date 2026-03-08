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

export class BulkSaleItemDto {
  @ApiProperty({ example: 'Nome do Produto' })
  @IsNotEmpty()
  @IsString()
  product_name: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 99.9 })
  @IsNumber()
  @Min(0)
  price: number;
}

export class BulkSaleDto {
  @ApiProperty({ example: 'Nome do Cliente' })
  @IsNotEmpty()
  @IsString()
  customer_name: string;

  @ApiProperty({ example: 'credit_card' })
  @IsString()
  @IsNotEmpty()
  payment_method: string;

  @ApiProperty({ example: 'Observações da venda', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ type: [BulkSaleItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkSaleItemDto)
  items: BulkSaleItemDto[];
}

export class BulkCreateSaleDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({ example: 'uuid-do-user' })
  @IsUUID('4')
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({
    type: [BulkSaleDto],
    description: 'Array de vendas para importação em lote',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkSaleDto)
  sales: BulkSaleDto[];
}

export class BulkCreateSaleResultDto {
  @ApiProperty({ example: 5 })
  total: number;

  @ApiProperty({ example: 4 })
  success: number;

  @ApiProperty({ example: 1 })
  failed: number;

  @ApiProperty({ type: [Object] })
  created: object[];

  @ApiProperty({ type: [Object] })
  errors: { index: number; error: string; data: BulkSaleDto }[];
}
