import { Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { getRepository } from 'typeorm'
import { Image } from '../image/image.entity';

@Injectable()
export class UserService {
  async create(user: User) {
    return await getRepository(User).create(user)
  }
  async save(user: User) {
    return await getRepository(User).save(user)
  }
  async findOneByToken(token: string) {
    return await getRepository(User).findOne({ token: token })
  }
  async findByUsername(username: string) {
    return await getRepository(User).findOne({ name: username })
  }
  async getAll(){
    return await getRepository(User).find()
  }
}
