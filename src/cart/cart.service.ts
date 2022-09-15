import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { User } from '../users/user.entity';
import { CartItem } from '../cart-items/cart-item.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemsRepository: Repository<CartItem>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async addToCart(addToCartDto: AddToCartDto, user: User) {
    const cartItem = this.cartItemsRepository.create();
    cartItem.quantity = addToCartDto.quantity;
    cartItem.product = await this.productsRepository.findOneBy({
      id: addToCartDto.product_id,
    });

    const cart = this.cartRepository.create();
    cart.user = user;
    cart.cart_items = [cartItem];
    console.log(await this.cartRepository.save(cart));
  }
}
