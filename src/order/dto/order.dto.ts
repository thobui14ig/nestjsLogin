import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Validate, validate } from "class-validator";




export class OrderDto{
    @ApiProperty()
    id: number;

}
