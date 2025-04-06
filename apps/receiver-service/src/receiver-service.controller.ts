import { Controller, Post, Body } from '@nestjs/common';
import { ReceiverService } from './receiver-service.service';
import { CreateReceiverDto } from './dto/create-receiver.dto';

@Controller('receiver')
export class ReceiverController {
  constructor(private readonly receiverService: ReceiverService) {}

  @Post()
  async receiveData(@Body() dto: CreateReceiverDto) {
    return this.receiverService.handleData(dto);
  }
}
