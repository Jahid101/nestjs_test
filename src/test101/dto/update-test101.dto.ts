import { PartialType } from '@nestjs/mapped-types';
import { CreateTest101Dto } from './create-test101.dto';
import { customerType } from '../schemas/test101.schema';
import { IsNotEmpty, IsNumber, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


// export class UpdateTest101Dto extends PartialType(CreateTest101Dto) {}

export class UpdateTest101Dto {
    
    readonly _id: string;

    @ApiProperty({
        description: "This is title",
        example: "Title 101",
    })
    @Length(3, 255)
    readonly title: string;


    @ApiProperty({
        description: "This is name",
        example: "Name 101",
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
    readonly customerType: customerType;
}
