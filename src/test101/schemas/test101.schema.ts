import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum customerType {
    NEW = 'new',
    OLD = 'old',
}

@Schema({
    timestamps: true,
})
export class Test101 {
    // @Prop()
    // _id: string;

    @Prop()
    title: string;

    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    customerType: customerType;
}

export const TestSchema = SchemaFactory.createForClass(Test101)