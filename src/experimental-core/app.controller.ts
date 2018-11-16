import { Get, Controller, Post, Body, UsePipes } from '@nestjs/common'
import { SamplePipe } from './sample.pipe';

@Controller('sample')
export class SampleController {
  @Get()
  sampleGet() {
    return 'hello'
  }
  @UsePipes(SamplePipe)
  @Post()
  samplePost(@Body() body) {
    return body
  }
}
