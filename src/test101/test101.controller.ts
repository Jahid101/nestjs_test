import { Test101 } from './schemas/test101.schema';
import { Test101Service } from './test101.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTest101Dto } from './dto/create-test101.dto';
import { UpdateTest101Dto } from './dto/update-test101.dto';
import { ApiTags, ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';


@ApiTags('Test101')

@Controller('test101')
export class Test101Controller {
    constructor(private Test101Service: Test101Service) { }

    @Post('create')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({
        description: 'Created Object as response',
        type: CreateTest101Dto,
    })
    @ApiBadRequestResponse({ description: 'Validation failed. Try again!' })
    async createTestService(
        @Body()
        Test101: CreateTest101Dto,
    ): Promise<Test101> {
        return this.Test101Service.create(Test101);
    }



    @Get()
    @ApiCreatedResponse({
        description: 'Array of Object as response',
    })
    async findAll(): Promise<Test101[]> {
        const result = await this.Test101Service.findAll()
        const count = result.length

        let finalRes: any = {
            total: count,
            data: result,
        }

        return finalRes;
        // return this.Test101Service.findAll();
    }



    @Get(':id')
    @ApiCreatedResponse({
        description: 'An Object of specific data',
        type: UpdateTest101Dto,
    })
    @ApiBadRequestResponse({ description: 'Could not find. Try again!' })

    async findOne(
        @Param('id')
        id: string,
    ): Promise<Test101[]> {
        return this.Test101Service.findById(id);
        // return this.Test101Service.findById(id);
    }



    @Patch(':id')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({
        description: 'Created Object as response',
        type: UpdateTest101Dto,
    })
    @ApiBadRequestResponse({ description: 'Validation failed. Try again!' })
    async updateTestService(
        @Param('id')
        id: string,
        @Body()
        test101: UpdateTest101Dto,
    ): Promise<Test101> {
        return this.Test101Service.updateById(id, test101);
    }



    @Delete(':id')
    @ApiCreatedResponse({
        description: 'An Object of specific data',
        type: UpdateTest101Dto,
    })
    @ApiBadRequestResponse({ description: 'Could not find. Try again!' })
    async deleteTest(
        @Param('id')
        id: string,
    ): Promise<Test101> {
        return this.Test101Service.deleteById(id);
    }

}
