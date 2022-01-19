import { RolesGuard } from './../auth/guards/roles/.guard';
import { Roles } from './../auth/decorators/roles.decorator';
// import { GetCurrentUserById } from './../utils/get-user-by-id';
import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, UseInterceptors, UseGuards, Request } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreatProductDto } from './dto/creat-product.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/model/role.enum';
import { GetCurrentUserById } from 'src/utils/get-user-by-id';


@Controller('items')


@UsePipes(new ValidationPipe())
export class ProductController {
    constructor(private readonly ProductService: ProductsService) {}
    // @Roles(Role.ADMIN)
    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    // @UseGuards(AuthGuard('jwt'))

    @Get(':id')
    async getId(@Param('id') id: string){
        // console.log(user)
        return this.ProductService.getOneById(id);
    }

    
    
    @Get('allProduct')
    async frontend(@GetCurrentUserById() user){
        // console.log(user)
        return this.ProductService.getAll();
    }


    @Post('add')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')

    @ApiCreatedResponse({ type: CreatProductDto})
    insertProduct(@Body() CreatProductDto: CreatProductDto){
        return this.ProductService.insertProduct(CreatProductDto);
    }


    @Put(':id')
    // @ApiConsumes('multipart/form-data')
    updatePproduct(@Param('id') id: string, @Body() CreatProductDto: CreatProductDto){
        return this.ProductService.updatePproduct(id, CreatProductDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string){
        return this.ProductService.deleteProduct(id);
    }
}
