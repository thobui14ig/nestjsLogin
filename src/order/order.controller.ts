import { OrderService } from './order.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService){}
    @Get(':id')
    getAll(@Param('id') id: number) {
        return this.orderService.getOrderById(id)
    }
}
