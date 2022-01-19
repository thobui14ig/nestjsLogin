import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import { IsUserAlreadyExist } from "../validate/unique.validate";



export class AuthRegisterDto{
    @ApiProperty({type: String, description: "email"})
    @IsEmail({}, {message: 'EMail không đúng định dạng!'})

    @IsNotEmpty({ message: 'Email không được bỏ trống!' })
    // @IsUserAlreadyExist({
    //     message: 'User đã tồn tại   ',
    //   })
    email: string;

    @ApiProperty({type: String, description: "password",default:""})
    @IsNotEmpty({ message: 'Mật khẩu không được bỏ trống!' })
    password: string
}


