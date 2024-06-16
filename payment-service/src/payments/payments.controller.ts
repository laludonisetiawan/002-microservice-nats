import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';
import { PaymentService } from './payments.service';

@Controller()
export class PaymentsMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE')
    private natsClient: ClientProxy,
    private readonly paymentService: PaymentService,
  ) {}

  @EventPattern('createPayment')
  async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);

    const newPayment =
      await this.paymentService.createPayment(createPaymentDto);
    this.natsClient.emit('paymentCreated', newPayment);
  }
}
