import { UserService } from './user.service';
import { Controller, Post, Body } from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //POST CREATE
  @Post()
  create(@Body() body: ObjectLiteral){
    this.userService.create({
        username: body.username,
        role: body.role,
        hashPassword: bcrypt.hashSync(body.password, 10)
    })
  }
  //UPDATE UPDATE
  //GET GET
  //DELETE DELETE
}
