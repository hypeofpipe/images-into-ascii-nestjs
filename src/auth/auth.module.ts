import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { HttpStrategy } from './auth.strategy'
import { UserService } from '../user/user.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [UserService, AuthService, HttpStrategy]
})
export class AuthModule {}
