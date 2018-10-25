import { Injectable } from '@nestjs/common';
import { Base64 } from '../types/base64.type';


@Injectable()
export class AppService {
  transform(base64: Base64): string {
    console.log(base64)
    return base64.file
  }
}
