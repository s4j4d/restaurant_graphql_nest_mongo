import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserInfo, UserInput } from "./user.type";



const users = []

// this resolver decorator is to specify what is our parent object type
@Resolver(() => UserInfo)
export class UserResolver {

    @Mutation(() => String)
    register(@Args('userData') userData: UserInput): string {

        users.push(userData)

        return 'register done !'
    }

    @Mutation(() => UserInfo)
    login(@Args('username', { type: () => String }) username: string
        , @Args('password', { type: () => String }) password: string) {

        const user = users.find((elem) => {
            if (elem.username === username && elem.password === password)
                return user
        })
    }

    @Query(() => [UserInfo], { name: 'userslist' })
    getUsersList() {
        return users
    }
}