import { ApiProperty } from "@nestjs/swagger";
import { customerType } from "../schemas/test101.schema";
import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class CreateTest101Dto {

    readonly _id: string;


    @ApiProperty({
        description: "This is title",
        example: "Title 101",
    })
    @IsNotEmpty({
        message: "Title is required"
    })
    @Length(3, 255)
    readonly title: string;


    @ApiProperty({
        description: "This is name",
        example: "Name 101",
    })
    @IsNotEmpty({
        message: "Name is required"
    })
    @Length(3, 255)
    readonly name: string;


    @ApiProperty({
        description: "This is age",
        example: 20,
    })
    @IsNumber()
    readonly age: number;


    @ApiProperty({
        description: "This is Customer type",
        example: 'old',
    })
    @IsNotEmpty({
        message: "Customer type is required"
    })
    readonly customerType: customerType;
}
