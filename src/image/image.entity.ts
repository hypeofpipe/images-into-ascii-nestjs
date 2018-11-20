import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm'
import { User } from '../user/user.entity';

@Entity()
export class Image {
  constructor(name, body) {
    this.name = name
    this.body = String(body).slice(0, 10)
  }

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  body!: string

  @ManyToOne(type => User, user => user.images)
  author!: User
}
