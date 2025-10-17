import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsUUID, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'uuid-do-user' })
  @IsUUID()
  id: string;

  @ApiProperty({ example: 'newpassword123', required: false, minLength: 6 })
  @MinLength(6)
  @IsOptional()
  password?: string;
}
