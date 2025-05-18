import { InputType, Field } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateCompanyInput {
  @Field({ description: 'Name of the company' })
  name: string;
  @Field({ description: 'Email of the company' })
  email: string;
  @Field({ description: 'Phone of the company', nullable: true })
  phone?: string;
  @Field({description:'CNPJ of the company', nullable: true })
  cnpj?: string;
  @Field(() => GraphQLJSON, { description: 'Address of the company', nullable: true })
  address?: Record<string, any>;
  @Field({ description: 'Indicates if the company is active', defaultValue: true })
  is_active?: boolean;
}
