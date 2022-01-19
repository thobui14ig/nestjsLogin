import { Profile } from './../profile/modle/profile.entity';
import { Users } from './../users/user.entity';
import { AuthLoginDto } from './dto/auth.login.dto';
import { AuthRegisterDto } from './dto/auth.register.dto'
import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users) private readonly authRepository: Repository<Users>,
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,

        private jwtService: JwtService
    ) {
    //   console.log(profileRepository)
    }

    async Login(dto: AuthLoginDto){
        const user = await this.authRepository.findOne({ email: dto.email, password: dto.password });
        if(user) return this.SinUser(user.id, user.email, user.role);
        else return false;
    }

    //ĐĂNG KY
    Register(dto: AuthRegisterDto){
        const newUser = this.authRepository.create(dto);
        this.authRepository.save(newUser);
        //lư vào bảng profile
        console.log(newUser);
        let newProfile = new Profile();
        newProfile.user = newUser;
        newProfile.gender = "nam";
        newProfile.photo = "/image/1.jpg";
       
        this.profileRepository.save(newProfile);
        // const newProfile = this.profileRepository.create();
       

        return;
    }
    //TÌM KIẾM EMAIL
    async findOneByName(emaill: string){  
        const user = await this.authRepository.findOne({ email: emaill});
        if(user) return false;
        return true;
    }


    //TẠO TOKEN
    SinUser(userId: number, email: string, role: string){
        return this.jwtService.sign({
            sub: userId, 
            email, 
            role: role,
            
        })
    }
}
