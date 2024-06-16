import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NastClientModule } from '../nast-client/nast-client.module';
import { PaymentService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payment';
@Module({
  imports: [TypeOrmModule.forFeature([Payment]), NastClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentService],
})
export class PaymentsModule {}
