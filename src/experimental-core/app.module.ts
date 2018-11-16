import { Module } from '@nestjs/common'
import { SampleController } from './app.controller';

@Module({
  controllers: [SampleController],
  providers: []
})
export class AppModule {}
