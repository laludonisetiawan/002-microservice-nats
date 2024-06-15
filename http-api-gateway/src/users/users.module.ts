import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { NastClientModule } from 'src/nast-client/nast-client.module';

@Module({
  imports: [NastClientModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
