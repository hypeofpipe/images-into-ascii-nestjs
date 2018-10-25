import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
} from '@nestjs/common';
// import { AppService } from './app.service';
import { KeyGuard } from './key.guard';
import { FileToBase64Pipe } from './file-to-base64';
import multer = require('multer');

@Controller('image')
export class ImageController {
  // constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: multer.memoryStorage() }))
  @UseGuards(new KeyGuard())
  transform(@UploadedFile() file: Express.Multer.File): string {
    const res = new FileToBase64Pipe().transform(file);
    return String(res);
  }
}
