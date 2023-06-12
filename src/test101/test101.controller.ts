import { Test101 } from './schemas/test101.schema';
import { Test101Service } from './test101.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CreateTest101Dto } from './dto/create-test101.dto';
import { UpdateTest101Dto } from './dto/update-test101.dto';


@Controller('test101')
export class Test101Controller {
    constructor(private Test101Service: Test101Service) { }

    @Post('create')
    async createTestService(
        @Body()
        Test101: CreateTest101Dto,
    ): Promise<Test101> {
        return this.Test101Service.create(Test101);
    }

    @Get()
    async findAll(): Promise<Test101[]> {
        return this.Test101Service.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id')
        id: string,
    ): Promise<Test101> {
        return this.Test101Service.findById(id);
    }


    @Patch(':id')
    async updateTestService(
        @Param('id')
        id: string,
        @Body()
        test101: UpdateTest101Dto,
    ): Promise<Test101> {
        return this.Test101Service.updateById(id, test101);
    }


    @Delete(':id')
    async deleteTest(
        @Param('id')
        id: string,
    ): Promise<Test101> {
        return this.Test101Service.deleteById(id);
    }


    // @Get(':id')
    // async findOne(
    //     @Param('id')
    //     id: string,
    // ): Promise<Test101> {
    //     return this.Test101Service.findById(id);
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.Test101Service.findOne(+id);
    // }

    //   @Patch(':id')
    //   update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    //     return this.Test101Service.update(+id, updatePostDto);
    //   }

    //   @Delete(':id')
    //   remove(@Param('id') id: string) {
    //     return this.Test101Service.remove(+id);
    //   }
}
