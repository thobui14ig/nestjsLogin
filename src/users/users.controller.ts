import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';


@Controller('user')
export class UsersController {
    constructor(private userService: UsersService){}
    //GETALL

    @Get()

    getAll(){
        return this.userService.getAll()
    }

    //GET BYID
    @Get('/:id')
    findOne(@Param('id') id: number){
        return this.userService.getOneById(id);
    }


}
