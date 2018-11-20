import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm'
import { Image } from '../image/image.entity';
@Entity()
export class User {
  constructor(name, hashPassword, token = '') {
    this.name = name
    this.hashPassword = hashPassword
    this.token = token
  }

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  hashPassword!: string

  @Column()
  token!: string

  @OneToMany(type => Image, image => image.author)
  images!: Image[]
}
