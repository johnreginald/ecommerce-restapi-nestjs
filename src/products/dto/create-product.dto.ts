import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsInt()
  @IsNotEmpty()
  price: number;
}
