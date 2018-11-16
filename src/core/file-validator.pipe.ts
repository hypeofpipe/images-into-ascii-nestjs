import {
  PipeTransform,
  BadRequestException,
  ArgumentMetadata,
  Injectable,
} from '@nestjs/common'

const mbToBytes = (mb: number) => {
  if (mb < 0) {
    throw new Error("Wrong number value! It couldn't be less than 0")
  }
  return 1048576 * mb
}
@Injectable()
export class FileValidatorPipe implements PipeTransform<any> {
  constructor() {
    console.log('whatrever')
  }

  transform(value: any, metadata: ArgumentMetadata) {
    throw new BadRequestException("Photo as field 'file' is required!")
    console.log(metadata)
    console.log('xDDDDDDD')
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
