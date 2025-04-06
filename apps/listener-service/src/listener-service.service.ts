import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Listener } from './schemas/listener.schema';
import * as moment from 'moment';
import { REDIS_CLIENT } from '../../../shared/redis.provider';
import Redis from 'ioredis';

@Injectable()
export class ListenerService implements OnModuleInit {
  constructor(
    @InjectModel('Listener') private listenerModel: Model<Listener>,

    @Inject(REDIS_CLIENT)
    private readonly redisClient: Redis,
  ) {}

  async onModuleInit() {
    const client = this.redisClient;

    client.subscribe('data-channel', (err) => {
      if (err) {
        console.error('Redis subscribe error:', err);
      }
    });

    client.on('message', async (_, message) => {
      const data = JSON.parse(message);
      const modified = {
        ...data,
        modified_at: moment().toISOString(),
      };

      await this.listenerModel.create(modified);
      console.log('Data received and inserted into listener collection');
    });
  }
}
