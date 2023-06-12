import { PartialType } from '@nestjs/mapped-types';
import { CreateTest101Dto } from './create-test101.dto';
import { customerType } from '../schemas/test101.schema';

// export class UpdateTest101Dto extends PartialType(CreateTest101Dto) {}

export class UpdateTest101Dto {
    readonly _id : string;
    readonly title : string;
    readonly name : string;
    readonly age : number;
    readonly customerType : customerType;
}
