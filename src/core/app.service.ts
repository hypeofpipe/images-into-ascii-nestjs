import { Injectable } from '@nestjs/common'
const asciify = require('asciify-image')

@Injectable()
export class AppService {
  async transform(file: Express.Multer.File): Promise<string> {
    return await asciify(file.buffer, {
      fit: 'box',
      width: 100,
      height: 100,
      color: false
    })
  }
}
