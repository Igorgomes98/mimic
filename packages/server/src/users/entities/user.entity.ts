import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
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

  @Field()
  is_active: boolean;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
