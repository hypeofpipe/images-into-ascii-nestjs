import { Controller, Post, Req, Body, UseGuards } from '@nestjs/common'
import { ImageService } from './image.service'
import { AuthGuard } from '@nestjs/passport';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @UseGuards(AuthGuard('bearer'))
  @Post("upload")
  async upload(@Body() body, @Req() req) {
    const asciiImage = await this.imageService.imageToAscii(body)
    if (body.save) {
      return {message: await this.imageService.save(asciiImage, req)}
    }
    return {message: asciiImage}
  }

  @Post("transform")
  async transform(@Body() body) {
    return await this.imageService.imageToAscii(body)
  }
}
