import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User, UserDTO } from './user.entity'
import { Repository, DeleteResult } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}
  async create(userDTO: UserDTO): Promise<User> {
    return await this.userRepository.save(new User(userDTO))
  }
  async update(userDTO: UserDTO): Promise<User> {
    const user: User = await this.userRepository.findOneOrFail(userDTO.username)
    user.username = userDTO.username
    user.role = user.role
    user.hashPassword = userDTO.hashPassword
    return await this.userRepository.save(user)
  }
  async read(username?: string, all?: boolean): Promise<User | User[] | void> {
    if (all) {
      return await this.userRepository.find()
    }
    if (username) {
      return await this.userRepository.findOne({ username: username })
    }
  }
  async delete(id?: number, username?: string): Promise<DeleteResult> {
    return await this.userRepository.delete(
      id && !username ? { id: id } : { username: username }
    )
  }
}
