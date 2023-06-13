import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length, IsEmail } from "class-validator";
import * as mongoose from "mongoose";

export class CreateCommentDto {

    readonly _id: string;


    @ApiProperty({
        description: "This is testId",
        example: "648706348fbd38210f1cffb5",
    })
    @IsNotEmpty({
        message: "Test Id is required"
    })
    readonly testId: mongoose.Schema.Types.ObjectId;
    // readonly testId: string;


    @ApiProperty({
        description: "This is Email",
        example: "email@example.com",
    })
    @IsNotEmpty({
        message: "Email is required"
    })
    @Length(3, 255)
    @IsEmail()
    readonly email: string;



    @ApiProperty({
        description: "This is comment",
        example: "Text comment 101",
    })
    @IsNotEmpty({
        message: "Comment is required"
    })
    @Length(3, 255)
    readonly text: string;
}
