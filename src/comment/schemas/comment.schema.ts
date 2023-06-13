import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";



@Schema({
    timestamps: true,
})
export class Comment {

    @Prop()
    testId: mongoose.Schema.Types.ObjectId;

    @Prop()
    email: string;

    @Prop()
    text: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment)