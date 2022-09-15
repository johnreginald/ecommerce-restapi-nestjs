import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';

@UseGuards(JwtAuthGuard)
@Controller('api/v1/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addProductToCart(@Body() addToCartDto: AddToCartDto, @Request() req) {
    return this.cartService.addToCart(addToCartDto, req.user);
  }
}
