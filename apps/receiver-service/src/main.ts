import { NestFactory } from '@nestjs/core';
import { ReceiverServiceModule } from './receiver-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ReceiverServiceModule);
  await app.listen(process.env.RECEIVER_PORT ?? 3001);
}
bootstrap();
