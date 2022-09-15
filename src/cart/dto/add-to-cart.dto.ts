import { IsInt } from 'class-validator';

export class AddToCartDto {
  @IsInt()
  product_id: number;

  @IsInt()
  quantity: number;
}
