import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsArray, ValidateNested, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PurchaseItemDto {
  @ApiProperty({ example: 'uuid-do-produto' })
  @IsUUID('4')
  @IsNotEmpty()
  product_id: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 50.00 })
  @IsNumber()
  @Min(0)
  cost: number;
}

export class CreatePurchaseDto {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;

  @ApiProperty({ example: 'uuid-do-user' })
  @IsUUID('4')
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({ example: 'uuid-do-supplier', required: false })
  @IsUUID('4')
  @IsOptional()
  supplier_id?: string;

  @ApiProperty({ example: 'NF-12345', required: false })
  @IsOptional()
  @IsString()
  invoice_number?: string;

  @ApiProperty({ example: 'Observações da compra', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ type: [PurchaseItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PurchaseItemDto)
  items: PurchaseItemDto[];
}
