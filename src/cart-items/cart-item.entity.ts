import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from '../cart/entities/cart.entity';
import { Product } from '../products/entities/product.entity';

@Entity('cart_items')
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, (cart) => cart.cart_items)
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;

  @OneToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column({
    type: 'int',
  })
  quantity: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
