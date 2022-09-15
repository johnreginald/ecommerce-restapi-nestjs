import { Injectable } from '@nestjs/common';

@Injectable()
export class CartItemsService {
  create(createCartItemDto: any) {
    return 'This action adds a new cartItem';
  }
}
