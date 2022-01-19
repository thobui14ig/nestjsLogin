
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";



export class UserDto{
    @ApiProperty({type: String, description: "email"})
    email: string;

    @ApiProperty({type: String, description: "password",default:""})
    password: string


}
