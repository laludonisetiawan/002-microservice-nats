import { Module } from '@nestjs/common';
import { NastClientModule } from '../nast-client/nast-client.module';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [NastClientModule],
  controllers: [PaymentsController],
  providers: [],
})
export class PaymentsModule {}
