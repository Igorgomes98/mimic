import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(6)
  password: string;

  @Field(() => String)
  @IsUUID('4')  
  roleId: string;

  @Field(() => String, { nullable: true })
  @IsUUID('4')
  @IsOptional()
  companyId?: string;
}
