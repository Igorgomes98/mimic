import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  sku: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  price: number;

  @Field({ nullable: true})
  createdAt?: Date;
}
