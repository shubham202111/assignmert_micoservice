
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListenerServiceController } from './listener-service.controller';
import { ListenerService } from './listener-service.service';
import { ListenerSchema } from './schemas/listener.schema';
import { RedisProvider } from '../../../shared/redis.provider';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/pubmicroservice'),
    MongooseModule.forFeature([{ name: 'Listener', schema: ListenerSchema }]),
  ],
  controllers: [ListenerServiceController],
  providers: [ListenerService, RedisProvider],
})
export class ListenerServiceModule {}
