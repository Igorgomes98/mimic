import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsArray, ValidateNested, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class SaleItemDto {
  @ApiProperty({ example: 'uuid-do-produto' })
  @IsUUID('4')
  @IsNotEmpty()
  product_id: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 99.90 })
  @IsNumber()
  @Min(0)
  price: number;
}

export class CreateSaleDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({ example: 'uuid-do-user' })
  @IsUUID('4')
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({ example: 'uuid-do-customer' })
  @IsUUID('4')
  @IsNotEmpty()
  customer_id: string;

  @ApiProperty({ example: 'credit_card' })
  @IsString()
  @IsNotEmpty()
  payment_method: string;

  @ApiProperty({ example: 'Observações da venda', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ type: [SaleItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items: SaleItemDto[];
}
