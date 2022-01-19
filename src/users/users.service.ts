
import { Users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';



@Injectable()
@UsePipes(new ValidationPipe())
export class UsersService {
    constructor(
        @InjectRepository(Users) private readonly userRepository: Repository<Users>
    ) {
      
    }

      //GET ALL
    async getAll(): Promise<Users[]> {
        return this.userRepository.find();
    }

    //GET BYID
    getOneById(id: number): any{
        let user = this.userRepository.findOneOrFail(id , { relations: ["products"] });
        if(user){
            return user;
        } else{
            return "Không tìm thấy";
        }

    }
}



