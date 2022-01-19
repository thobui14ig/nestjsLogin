import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private readonly orderRepository: Repository<Order>
    ) {
        console.log()
    }

    //GET BYID
    getOrderById(id: number): any{
        let order = this.orderRepository.findOneOrFail(id, { relations: ["user", "products"] });
        if(order){
            return order;
        } else{
            return "Không tìm thấy";
        }

    }


}
