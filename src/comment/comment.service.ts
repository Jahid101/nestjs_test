import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Comment } from './schemas/comment.schema';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name)
        private commentModel: mongoose.Model<Comment>
    ) { }


    async create(comment: Comment): Promise<Comment> {
        const res = await this.commentModel.create(comment);
        return res
    }

    async findAll(): Promise<Comment[]> {
        const test = await this.commentModel.find();
        return test
    }

}
