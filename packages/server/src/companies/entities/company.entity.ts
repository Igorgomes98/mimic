import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class Company {
  @Field(() => ID, { description: 'Unique identifier for the company' })
  id: string;
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
  is_active: boolean;
  @Field({ description: 'Register a date to create the company' })
  created_at: Date;
  @Field({ description: 'Last update date of the company' })
  updated_at: Date;
}
