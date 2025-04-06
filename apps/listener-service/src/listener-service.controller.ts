import { Controller, Get } from '@nestjs/common';
import { ListenerService } from './listener-service.service';

@Controller()
export class ListenerServiceController {
  constructor(private readonly listenerService: ListenerService) {}

}
