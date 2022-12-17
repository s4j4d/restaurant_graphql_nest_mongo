import { Module } from '@nestjs/common';
import { Order } from './order.type';
import { UserResolver } from './user.resolvers';

@Module({
    imports: [],
    providers: [UserResolver, Order]
})
export class UserModule { }
