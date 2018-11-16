import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  UsePipes,
} from '@nestjs/common'
import { AppService } from './app.service'
import { KeyGuard } from './key.guard'
import multer = require('multer')
import { FileValidatorPipe } from './file-validator.pipe'
console.log(FileValidatorPipe)
console.log(typeof new FileValidatorPipe().transform)
@Controller('image')
export class ImageController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: multer.memoryStorage() }))
  @UsePipes(new FileValidatorPipe())
  // @UseGuards(new KeyGuard())
  async transform(@UploadedFile() file: Express.Multer.File): Promise<string> {
    return await this.appService.transform(file)
  }
}
