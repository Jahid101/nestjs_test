import { Module } from '@nestjs/common';
import { Test101Controller } from './test101.controller';
import { Test101Service } from './test101.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from './schemas/test101.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Test101', schema: TestSchema }])],
  controllers: [Test101Controller],
  providers: [Test101Service]
})
export class Test101Module { }
