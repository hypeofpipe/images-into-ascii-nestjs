import { Controller, Post, Req, Body } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { User } from '../user/user.entity'
import { Encryptor } from './auth.utils'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registrate(@Body() body) {
    return {
        message: await this.authService.registrateUser(body.username, body.password)
    }
  }

  @Post('login')
  async login(@Body() body) {
    return {
        message: await this.authService.login(body.username, body.password)
    }
  }
}
