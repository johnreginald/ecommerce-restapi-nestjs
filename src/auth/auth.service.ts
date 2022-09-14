import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

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
        username: user.username,
        id: user.id,
      };
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, id: user.id };

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
