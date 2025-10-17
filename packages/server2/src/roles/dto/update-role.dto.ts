import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @ApiProperty({ example: 'uuid-do-role' })
  @IsUUID('4')
  id: string;

  @ApiProperty({ example: 'Manager', description: 'Nome do role', required: false })
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Gerente de equipe', description: 'Descrição do role', required: false })
  @IsOptional()
  description?: string;
}
