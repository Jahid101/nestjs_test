import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey you........, What are you looking at......., Nothing to see here......., Go to ==> https://nestjstest.up.railway.app/api';
    // return 'Hello World!';
  }
}
