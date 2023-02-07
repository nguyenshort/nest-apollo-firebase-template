import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFirebaseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
