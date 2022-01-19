

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Validate, validate } from "class-validator";
import { IsUserAlreadyExist } from "../validate/unique.validate";



export class AuthLoginDto{
    @ApiProperty({type: String, description: "email"})
    @IsEmail({}, {message: 'EMail không đúng định dạng!'})

    @IsNotEmpty({ message: 'Email không được bỏ trống!' })
    email: string;

    @ApiProperty({type: String, description: "password",default:""})
    @IsNotEmpty({ message: 'Mật khẩu không được bỏ trống!' })
    // @IsLongerThan('password', {
    //     message: 'quá dài',
    //   })
    password: string
}


