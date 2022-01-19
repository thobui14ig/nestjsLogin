import { Order } from './../order/order.entity';
import { Profile } from './../profile/modle/profile.entity';
import { Role } from './../auth/model/role.enum';
import { Injectable } from "@nestjs/common";
import {Column, Entity, getConnection, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Product } from 'src/products/product.entity';
@Entity()
@Injectable()
export class Users{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string

    @OneToOne(type => Profile, profile => profile.user)
    profile: Profile;

    @OneToMany(type => Product, product => product.user) // note: we will create author property in the Photo class below
    products: Product[];

    @OneToMany(type => Order, order => order.user) // note: we will create author property in the Photo class below
    orders: Order[];




    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;


}