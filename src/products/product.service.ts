
import { Product } from './product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product as ProductInterface } from './interface/product.interface';
import { Repository } from 'typeorm';
import { getConnection } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {

  constructor(
      @InjectRepository(Product) private readonly productRepository: Repository<Product>
  ) {
    
  }
  ///add
  insertProduct(item){
    const id = uuidv4();
    const newProduct = this.productRepository.create(item);

    return this.productRepository.save(newProduct);
   
  }



  //GET ALL
  async getAll(): Promise<Product[]> {
    return this.productRepository.find();
  }
  //UPDATE


  async getOneById(id: string): Promise<Product> {
      try {
          const product = await this.productRepository.findOneOrFail(id,{ relations: ["user"] });
          return product;
      } catch (error) {
          throw error;
      }
  }

  async updatePproduct(id, item: ProductInterface): Promise<Product> {
    try {
        const product = await this.getOneById(item.id);
        product.name = item.name;
        product.description = item.description;
        product.qty = item.qty;
  
        return this.productRepository.save(product);
    } catch (error) {
        throw error;
    }

    
    
  }


  async deleteProduct(id: string): Promise<Product> {
    try {
      const product = await this.getOneById(id);

      return this.productRepository.remove(product); 
    } catch (error) {
        throw error;
    }

  }

  

  








}