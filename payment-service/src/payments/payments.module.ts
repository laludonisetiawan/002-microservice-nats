import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NastClientModule } from '../nast-client/nast-client.module';
@Module({
  imports: [NastClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [],
})
export class PaymentsModule {}
