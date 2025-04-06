import { Test, TestingModule } from '@nestjs/testing';
import { ListenerServiceController } from './listener-service.controller';
import { ListenerServiceService } from './listener-service.service';

describe('ListenerServiceController', () => {
  let listenerServiceController: ListenerServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ListenerServiceController],
      providers: [ListenerServiceService],
    }).compile();

    listenerServiceController = app.get<ListenerServiceController>(ListenerServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(listenerServiceController.getHello()).toBe('Hello World!');
    });
  });
});
