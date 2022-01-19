import { AuthRegisterDto } from './dto/auth.register.dto';
import { AuthLoginDto } from './dto/auth.login.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('auth')
@UsePipes(new ValidationPipe())
export class AuthController {
    constructor(private readonly AuthService: AuthService){}

    @Post('register')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    Register(@Body() dto: AuthRegisterDto){

        return this.AuthService.Register(dto);

    }


    @Post('login')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    Login(@Body() dto: AuthLoginDto){
        return this.AuthService.Login(dto);
    }
}
