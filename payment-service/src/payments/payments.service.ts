import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payment';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>,
  ) {}

  createPayment(createPaymentDto: CreatePaymentDto) {
    const newPayment = this.paymentsRepository.create(createPaymentDto);
    return this.paymentsRepository.save(newPayment);
  }
}
