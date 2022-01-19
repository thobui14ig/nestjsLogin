import { Product } from './product.entity';
import { ProductsService } from './product.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';


@Module({

  
  imports: [
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [ProductController],
  providers: [ProductsService]
})
export class ProductModule {}