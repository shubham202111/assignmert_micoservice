import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceiverController } from './receiver-service.controller';
import { ReceiverService } from './receiver-service.service';
import { ReceiverSchema } from './schemas/receiver.schema';
import { RedisProvider } from '../../../shared/redis.provider';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/pubmicroservice'),
    MongooseModule.forFeature([{ name: 'Receiver', schema: ReceiverSchema }]),
  ],
  controllers: [ReceiverController],
  providers: [ReceiverService, RedisProvider],
})
export class ReceiverServiceModule {}

