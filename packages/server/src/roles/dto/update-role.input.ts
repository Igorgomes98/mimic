import { IsOptional, IsUUID } from 'class-validator';
import { CreateRoleInput } from './create-role.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  @Field(() => String)
  @IsUUID('4') 
  id: string;

  @Field(() => String, { description: 'Name of the role' })
  @IsOptional()
  name?: string;

  @Field(() => String, { description: 'Description of the role' })
  @IsOptional()
  description?: string;
}
