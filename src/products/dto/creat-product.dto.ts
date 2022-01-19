import { ApiProperty } from "@nestjs/swagger";
import { Length, Max, MaxLength, Min, MinLength } from "class-validator";


export class CreatProductDto{
    @ApiProperty({type: String, description: "name"})
    @MinLength(3, { message: 'Tên phải lớn hơn 3 kí tự' })
    @MaxLength(7, { message: 'Tên quá dài' })
    readonly name: string;

    @ApiProperty({type: Number, description: "password"})
    readonly description: string

    // @ApiProperty({type: String, description: "id"})
    // readonly id: string

    @ApiProperty({type: Number, description: "qty"})
    readonly qty: number
}