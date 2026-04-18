import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsArray, ValidateNested, IsNumber, Min, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum PaymentStatus {
  PAGO = 'PAGO',
  PENDENTE = 'PENDENTE',
  PARCIAL = 'PARCIAL',
}

export enum FreightPayer {
  CLIENTE = 'CLIENTE',
  EMPRESA = 'EMPRESA',
}

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

  @ApiProperty({ enum: PaymentStatus, example: PaymentStatus.PENDENTE, required: false })
  @IsOptional()
  @IsEnum(PaymentStatus)
  payment_status?: PaymentStatus;

  @ApiProperty({ example: 15.50, required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  freight_cost?: number;

  @ApiProperty({ enum: FreightPayer, example: FreightPayer.CLIENTE, required: false })
  @IsOptional()
  @IsEnum(FreightPayer)
  freight_paid_by?: FreightPayer;

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
