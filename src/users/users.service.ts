import { Injectable, Inject } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Queries
  findAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  // Mutations
  create(createUserInput: CreateUserInput) {
    return this.usersRepository.save(createUserInput);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.usersRepository.save({
      id: id,
      ...updateUserInput,
    });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
