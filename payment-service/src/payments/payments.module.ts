import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NastClientModule } from '../nast-client/nast-client.module';
import { PaymentService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payment';
import { User } from 'src/typeorm/entities/User';
@Module({
  imports: [TypeOrmModule.forFeature([Payment, User]), NastClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentService],
})
export class PaymentsModule {}
