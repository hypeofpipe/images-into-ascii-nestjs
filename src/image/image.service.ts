import { Injectable, BadRequestException } from '@nestjs/common'
import { getRepository } from 'typeorm';
import { Image } from './image.entity';
import bodyParser = require('body-parser');
import { Request } from 'express';
import { UserService } from '../user/user.service';
const asciify = require('asciify-image')

@Injectable()
export class ImageService {
  constructor(private readonly userService: UserService) {}

  async imageToAscii(body) {
    return await asciify(base64ToBuffer(body.image), {
      fit: 'box',
      width: 100,
      height: 100,
      color: true
    })
  }

  async save(asciiImage, req) {
    const user = await this.userService.findOneByToken(getTokenFromRequest(req))
    if (!user) {
      return new BadRequestException('User not found')
    }
    const image = new Image(asciiImage.slice(0, 4), asciiImage)

    image.author = user
    await getRepository(Image).save(image)

    user.images = [image]
    await this.userService.save(user)

    return `Image has been saved by ${image.id} and it name is ${image.name}!`
  }
}

const base64ToBuffer = (rawBase64: string) => {
  const buffer = Buffer.from(processBase64(rawBase64), 'base64')
  return buffer
}

const processBase64 = (rawBase64: string) => {
  if (rawBase64.startsWith('data')) {
    return rawBase64.split(',')[1]
  }
  return rawBase64
}

const getTokenFromRequest = (req: Request) => {
  if (req && req.headers && req.headers.authorization){
    return req.headers.authorization.split(" ")[1]
  }
  throw new Error('No request or headers or authorization found!')
}