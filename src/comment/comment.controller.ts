import { Body, Controller, Post, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { Comment } from './schemas/comment.schema';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';


@ApiTags('Comment')

@Controller('comment')
export class CommentController {
    constructor(private CommentService: CommentService) { }

    @Post('create')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({
        description: 'Created Object as response',
        type: CreateCommentDto,
    })
    @ApiBadRequestResponse({ description: 'Validation failed. Try again!' })

    async createComment(
        @Body()
        comment: CreateCommentDto,
    ): Promise<Comment> {
        return this.CommentService.create(comment);
    }



    @Get()
    @ApiCreatedResponse({
        description: 'Array of Object as response',
    })
    async findAll(): Promise<Comment[]> {
        const result = await this.CommentService.findAll()
        const count = result.length

        let finalRes: any = {
            total: count,
            data: result,
        }

        return finalRes;
        // return this.Test101Service.findAll();
    }
}