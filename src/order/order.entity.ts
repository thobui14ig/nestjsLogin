import { Product } from 'src/products/product.entity';
import { Users } from 'src/users/user.entity';

import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Order {


  @PrimaryGeneratedColumn()
  public id: string;




  @Column()
  public qty: number;

  @ManyToMany(type => Product, product => product.orders)
  @JoinTable()
  products: Product[];



  @ManyToOne(type => Users, user => user.orders)
  user: Users;


  



}

