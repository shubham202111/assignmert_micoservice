import { Test, TestingModule } from '@nestjs/testing';
import { ReceiverServiceController } from './receiver-service.controller';
import { ReceiverServiceService } from './receiver-service.service';

describe('ReceiverServiceController', () => {
  let receiverServiceController: ReceiverServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReceiverServiceController],
      providers: [ReceiverServiceService],
    }).compile();

    receiverServiceController = app.get<ReceiverServiceController>(ReceiverServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(receiverServiceController.getHello()).toBe('Hello World!');
    });
  });
});
