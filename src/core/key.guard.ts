import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'
require('dotenv').config()

@Injectable()
export class KeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest()
    if (request.query.key === process.env.KEY) {
      return true
    }
    return false
  }
}
