import { Get, Controller } from '@nestjs/common'

@Controller('sample')
export class SampleController {
  @Get()
  sampleGet() {
    return 'hello'
  }
}
