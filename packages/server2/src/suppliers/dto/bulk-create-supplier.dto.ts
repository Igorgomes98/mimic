import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class BulkSupplierItemDto {
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

export class BulkCreateSupplierDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({
    type: [BulkSupplierItemDto],
    description: 'Array de fornecedores para importação em lote',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkSupplierItemDto)
  suppliers: BulkSupplierItemDto[];
}

export class BulkCreateSupplierResultDto {
  @ApiProperty({ example: 5 })
  total: number;

  @ApiProperty({ example: 4 })
  success: number;

  @ApiProperty({ example: 1 })
  failed: number;

  @ApiProperty({ type: [Object] })
  created: object[];

  @ApiProperty({ type: [Object] })
  errors: { index: number; error: string; data: BulkSupplierItemDto }[];
}
