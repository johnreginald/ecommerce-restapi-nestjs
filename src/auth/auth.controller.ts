import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('api/v1')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  async login(@Body() user: any) {
    return this.authService.login(user);
  }

  @Post('register')
  @HttpCode(201)
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }
}
