import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'Admin', description: 'Nome do role' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Administrador do sistema', description: 'Descrição do role', required: false })
  @IsOptional()
  description?: string;
}
