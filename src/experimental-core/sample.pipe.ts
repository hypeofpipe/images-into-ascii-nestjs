import { Injectable, ArgumentMetadata, PipeTransform } from '@nestjs/common';

@Injectable()
export class SamplePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("I'm working")
    return value;
  }
}