import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common'
import { Request } from 'express'

const mbToBytes = (mb: number) => {
  if (mb < 0) {
    throw new Error("Wrong number value! It couldn't be less than 0")
  }
  return 1048576 * mb
}

@Injectable()
export class FileValidatorPipe implements PipeTransform<Request, Request> {
  transform(value: Request, _metadata: ArgumentMetadata) {
    console.log('test§')
    const req = value
    if (!req.file) {
      console.log(req.file)
      throw new BadRequestException("Photo as field 'file' is required!")
    }
    if (req.file.mimetype !== 'application/jpeg') {
      throw new BadRequestException('.jpeg is accepted only!')
    }
    if (req.file.size > mbToBytes(20)) {
      throw new BadRequestException("An image can't be bigger than 20 MB")
    }
    return value
  }
}
