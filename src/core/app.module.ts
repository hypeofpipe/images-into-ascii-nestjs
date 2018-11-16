import { Module } from '@nestjs/common'
import { ImageController } from './app.controller'
import { AppService } from './app.service'
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [TypeOrmModule.forRoot()],
  controllers: [ImageController],
  providers: [AppService]
})
export class AppModule {}
