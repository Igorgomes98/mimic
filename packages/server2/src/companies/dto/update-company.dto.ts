import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @ApiProperty({ example: 'uuid-da-company' })
  @IsUUID('4')
  id: string;

  @ApiProperty({ 
    example: { street: 'Rua XYZ', number: '456', city: 'Rio de Janeiro', state: 'RJ' }, 
    description: 'Endereço da empresa', 
    required: false 
  })
  @IsOptional()
  address?: Record<string, any>;
}
