import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/user.entity';
import { CartItem } from '../../cart-items/cart-item.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.carts)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => CartItem, (cart_item) => cart_item.cart)
  cart_items: CartItem[];

  @Column()
  checked_out: Date;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
