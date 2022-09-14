import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterDto } from '../auth/dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }

  create(user: RegisterDto): Promise<User> {
    return this.usersRepository.save(user);
  }
}
