import { Module } from '@nestjs/common'
import { ImageController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [AppService]
})
export class AppModule {}
