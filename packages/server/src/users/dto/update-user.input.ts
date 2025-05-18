import { IsOptional, IsUUID, MinLength } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  @IsUUID()
  id: string;

  @Field({ nullable: true })
  @MinLength(6)
  @IsOptional()
  password?: string;
}
