import { Field, Int, ObjectType } from "@nestjs/graphql";





@ObjectType()
export class Order{

    @Field()
    item:string

    @Field(() =>Int)
    number:number
}