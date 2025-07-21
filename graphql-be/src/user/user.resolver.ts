import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Mutation(() => User)
    createUser(@Args('input') input: CreateUserInput) {
        return this.userService.create(input);
    }

    @Query(() => [User], { nullable: true })
    users() {
        return this.userService.findAll();
    }

    @Query(() => User, { nullable: true })
    user(@Args('id', { type: () => ID }) id: number) {
        return this.userService.findOne(id);
    }

    @Mutation(() => User, { nullable: true })
    updateUser(@Args('input') input: UpdateUserInput) {
        return this.userService.update(input.id, input);
    }

    @Mutation(() => Boolean)
    deleteUser(@Args('id', { type: () => ID }) id: number) {
        return this.userService.remove(id);
    }

    @Query(() => User, { nullable: true })
    userPosts(@Args('id', { type: () => ID }) id: number): Promise<User | null> {
        return this.userService.findOneWithPosts(id);
    }
}
