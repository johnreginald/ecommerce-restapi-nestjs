import { IsAlpha, IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsAlpha()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
