import { Module } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './cart-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem])],
  providers: [CartItemsService],
  exports: [CartItemsService],
})
export class CartItemsModule {}
