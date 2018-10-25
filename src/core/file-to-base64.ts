import {
  InternalServerErrorException,
} from '@nestjs/common';
import { Base64 } from '../types/base64.type';

const getPixels = require('get-pixels');
const savePixels = require('save-pixels');
const posterize = require('posterize');

export class FileToBase64Pipe {
  transform(value: Express.Multer.File): Base64 {
    const file = value.buffer
    const poster = getPixels(file, (err: Error, pixels: any) => {
      if (err)
        throw new InternalServerErrorException(
          'Pixels method has failed',
          err.toString()
        );
      return posterize(pixels, 3);
    });

    return savePixels(poster, 'jpg').pipe(
      (data: any): Base64 => {
        return { file: data.toString('base64') };
      }
    );
  }
}
