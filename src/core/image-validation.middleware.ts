import {
  Injectable,
  NestMiddleware,
  MiddlewareFunction
} from '@nestjs/common';

@Injectable()
export class TypeValidationMiddleware implements NestMiddleware {
  resolve(..._args: any[]): MiddlewareFunction<any, any, any> | Promise<MiddlewareFunction> {
    return (req: any, res: any, next: any) => {
      console.log(`${req}${res}`)
      next()
    }
  }
}
