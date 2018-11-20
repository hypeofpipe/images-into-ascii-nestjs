import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { User } from '../user/user.entity'
import { Tokener, Encryptor } from './auth.utils'
import { getRepository } from 'typeorm'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(token: string): Promise<any> {
    return await this.userService.findOneByToken(token)
  }

  async registrateUser(username: string, password: string) {
    if (await this.userService.findByUsername(username)){
      return "User already exists in the DB!"
    }
    const user: User = await this.userService.create(
      new User(username, await Encryptor.encrypt(password))
    )
    user.token = await Tokener.createToken()
    await this.userService.save(user)
    return `Your token is ${user.token}`
  }

  async login(username: string, password: string) {
    const user = await this.userService.findByUsername(username)
    if (!user || !(await Encryptor.compare(password, user.hashPassword))){
      return "User not found / bad password"
    }
    return user.token
  }
}
