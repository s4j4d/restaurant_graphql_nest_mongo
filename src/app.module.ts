import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver:ApolloDriver,
    playground:true,
    debug:true,
    autoSchemaFile:join(process.cwd() , 'src/schema.gql')
  }), OrderModule, AdminModule, UserModule,
],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
