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

export class BulkPurchaseItemDto {
  @ApiProperty({ example: 'Nome do Produto' })
  @IsNotEmpty()
  @IsString()
  product_name: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 50.0 })
  @IsNumber()
  @Min(0)
  cost: number;
}

export class BulkPurchaseDto {
  @ApiProperty({ example: 'Nome do Fornecedor', required: false })
  @IsOptional()
  @IsString()
  supplier_name?: string;

  @ApiProperty({ example: 'NF-12345', required: false })
  @IsOptional()
  @IsString()
  invoice_number?: string;

  @ApiProperty({ example: 'Observações da compra', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ type: [BulkPurchaseItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkPurchaseItemDto)
  items: BulkPurchaseItemDto[];
}

export class BulkCreatePurchaseDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({ example: 'uuid-do-user' })
  @IsUUID('4')
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({
    type: [BulkPurchaseDto],
    description: 'Array de compras para importação em lote',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkPurchaseDto)
  purchases: BulkPurchaseDto[];
}

export class BulkCreatePurchaseResultDto {
  @ApiProperty({ example: 5 })
  total: number;

  @ApiProperty({ example: 4 })
  success: number;

  @ApiProperty({ example: 1 })
  failed: number;

  @ApiProperty({ type: [Object] })
  created: object[];

  @ApiProperty({ type: [Object] })
  errors: { index: number; error: string; data: BulkPurchaseDto }[];
}
