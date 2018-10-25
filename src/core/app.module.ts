import { Module, NestModule, MiddlewareConsumer, RequestMethod,} from '@nestjs/common';
import { ImageController  } from './app.controller';
import { AppService } from './app.service';
import { TypeValidationMiddleware } from './image-validation.middleware';

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TypeValidationMiddleware)
      .forRoutes({path: '/image', method: RequestMethod.POST})
  }
}
