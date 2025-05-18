import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Role {
  @Field(() => ID, { description: 'Unique identifier for the role' })
  id: string;

  @Field(() => String, { description: 'Name of the role' })
  name: string;

  @Field(() => String, { description: 'Description of the role' })
  description: string;
}
