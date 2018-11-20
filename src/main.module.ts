import { AuthModule } from './auth/auth.module'
import { ImageModule } from './image/image.module'
import { UserModule } from './user/user.module'
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule, AuthModule, ImageModule, ]
})
export class MainModule {}
