import GraphQLJSON from 'graphql-type-json';
import { CreateCompanyInput } from './create-company.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Field(() => String)
  @IsUUID('4')
  id: string;

  @Field(() => GraphQLJSON, {nullable: true })
  @IsOptional()
  address?: Record<string, any>;
}
