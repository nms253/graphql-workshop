import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    create(input: CreateUserInput) {
        const user = this.userRepo.create(input);
        return this.userRepo.save(user);
    }

    findAll() {
        return this.userRepo.find();
    }

    findOne(id: number) {
        return this.userRepo.findOneBy({ id });
    }

    async update(id: number, input: UpdateUserInput) {
        const user = await this.userRepo.findOneBy({ id });
        if (!user) return null;
        await this.userRepo.update(id, input)
        return Object.assign(user, input);
    }

    async remove(id: number) {
        const user = await this.userRepo.findOneBy({ id });
        if (!user) return false;
        await this.userRepo.remove(user);
        return true;
    }

    async findOneWithPosts(id: number): Promise<User | null> {
        return this.userRepo.findOne({
            where: { id },
            relations: ['posts'], // Load posts along with the user
        });
    }
}
