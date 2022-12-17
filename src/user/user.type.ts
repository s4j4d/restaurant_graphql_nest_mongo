import { Field, InputType, ObjectType, OmitType, PartialType, PickType } from "@nestjs/graphql";
import {Order} from "./order.type"


@InputType()
export class UserInput {

    @Field({nullable:false})
    username:string

    @Field({description:'required for login and register'})
    password:string

    @Field()
    firstname:string

    @Field()
    lastname:string

    @Field()
    phonenumber:string


}



@ObjectType()
export class UserInfo {
    
    @Field({nullable:false})
    username:string
    
    @Field({nullable:true})
    password:string
    
    @Field()
    firstname:string
    
    @Field()
    lastname:string
    
    @Field()
    phonenumber:string
    
    @Field(()=>[Order!])
    orderHistory:[Order]
    
}