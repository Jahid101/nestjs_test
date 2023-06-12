import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test101 } from './schemas/test101.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class Test101Service {
    constructor(
        @InjectModel(Test101.name)
        private testModel: mongoose.Model<Test101>
    ) { }


    async findAll(): Promise<Test101[]> {
        const test = await this.testModel.find();
        return test
    }


    async create(Test101: Test101): Promise<Test101> {
        const res = await this.testModel.create(Test101);
        return res
    }


    async findById(id: string): Promise<Test101> {
        const test = await this.testModel.findById(id);

        if (!test) {
            throw new NotFoundException("Could not find.")
        }

        return test
    }


    async updateById(id: string, test101: Test101): Promise<Test101> {
        const test = await this.testModel.findByIdAndUpdate(id, test101, {
            new: true,
            runValidators: true,
        });

        if (!test) {
            throw new NotFoundException("Could not find.")
        }

        return test
    }


    async deleteById(id: string): Promise<Test101> {
        const test = await this.testModel.findByIdAndDelete(id);

        if (!test) {
            throw new NotFoundException("Could not find.")
        }

        return test;
    }
}
