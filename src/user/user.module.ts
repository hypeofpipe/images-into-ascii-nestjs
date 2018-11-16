import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { User } from './user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: []
})
export class UserModule {
  constructor(private readonly connection: Connection) {}
}
