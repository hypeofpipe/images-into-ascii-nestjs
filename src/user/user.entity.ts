import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  constructor(userDTO: UserDTO){
    this.username = userDTO.username
    this.role = userDTO.role
    this.hashPassword = userDTO.hashPassword
  }
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  username!: string

  @Column()
  role!: string

  @Column()
  hashPassword!: string
}

export interface UserDTO {
  username: string,
  role: string,
  hashPassword: string
}