import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateRoleInput {
  @Field(() => String, { description: 'Name of the role' })
  @IsNotEmpty()
  name: string;

  @Field(() => String, { description: 'Description of the role' })
  @IsOptional()
  description?: string;
}
