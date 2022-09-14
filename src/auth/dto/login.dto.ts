import { IsInt, IsString } from 'class-validator';

export class LoginDto {
  @IsInt()
  id: number;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
