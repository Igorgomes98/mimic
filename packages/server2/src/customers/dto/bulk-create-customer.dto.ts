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

export class BulkCustomerItemDto {
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
}

export class BulkCreateCustomerDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({
    type: [BulkCustomerItemDto],
    description: 'Array de clientes para importação em lote',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkCustomerItemDto)
  customers: BulkCustomerItemDto[];
}

export class BulkCreateResultDto {
  @ApiProperty({ example: 5 })
  total: number;

  @ApiProperty({ example: 4 })
  success: number;

  @ApiProperty({ example: 1 })
  failed: number;

  @ApiProperty({ type: [Object] })
  created: object[];

  @ApiProperty({ type: [Object] })
  errors: { index: number; error: string; data: BulkCustomerItemDto }[];
}
