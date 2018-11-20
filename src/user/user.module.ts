import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
