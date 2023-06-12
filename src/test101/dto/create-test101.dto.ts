import { customerType } from "../schemas/test101.schema";

export class CreateTest101Dto {
    readonly _id : string;
    readonly title : string;
    readonly name : string;
    readonly age : number;
    readonly customerType : customerType;
}
