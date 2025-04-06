import { NestFactory } from '@nestjs/core';
import { ListenerServiceModule } from './listener-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ListenerServiceModule);
  await app.listen(process.env.LISTERNER_PORT ?? 3000);
}
bootstrap();
