import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const checkPassword = await bcrypt.compare(password, user.password);

    if (user && checkPassword) {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
      } as User;
    }

    return null;
  }

  async login(user: User) {
    const payload = { user: user };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async register(user: RegisterDto) {
    try {
      return this.usersService.create(user);
    } catch (error) {
      console.log(error);
    }
  }
}
