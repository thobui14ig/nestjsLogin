import { Order } from './../order/order.entity';
import { Users } from 'src/users/user.entity';

import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Product {


  @PrimaryGeneratedColumn()
  public id: string;



  @Column()
  public name: string;



  @Column()
  public description: string;

  @Column()
  public qty: number;

  @ManyToOne(type => Users, user => user.products)
  user: Users;

  @ManyToMany(type => Order, order => order.products)
  orders: Order[];


  constructor(
   id: string,
    name: string,
   description: string,
    qty: number
  ){}
}

