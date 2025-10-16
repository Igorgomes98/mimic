import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Company } from 'src/companies/entities/company.entity';
import { Role } from 'src/roles/entities/role.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Role)
  role: Role;

  @Field(() => Company, { nullable: true })
  company?: Company;

  @Field(() => Boolean, { name: 'isActive' })
  is_active: boolean;

  // Mapeia a propriedade 'created_at' do objeto para o campo 'createdAt' no schema GraphQL
  @Field(() => Date, { name: 'createdAt' })
  created_at: Date;

  // Mapeia a propriedade 'updated_at' do objeto para o campo 'updatedAt' no schema GraphQL
  @Field(() => Date, { name: 'updatedAt' })
  updated_at: Date;
}
