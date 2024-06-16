import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    console.log(data);
    return this.usersService.createUser(data);
  }

  @EventPattern('paymentCreated')
  payementCreated(@Payload() data: any) {
    console.log(data);
  }
}
