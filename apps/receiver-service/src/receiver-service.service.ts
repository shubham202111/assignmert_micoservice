import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import {  Receiver } from './schemas/receiver.schema';
import { v4 as uuid } from 'uuid';
import * as moment from 'moment';
import { Redis } from 'ioredis';
import { REDIS_CLIENT } from '../../../shared/redis.provider';

@Injectable()
export class ReceiverService {
  constructor(
    @InjectModel('Receiver') private receiverModel: Model<Receiver>,
    @Inject(REDIS_CLIENT)
    private readonly redisClient: Redis,
  ) {}

  async handleData(dto: CreateReceiverDto) {
    const doc = {
      id: uuid(),
      ...dto,
      inserted_at: moment().toISOString(),
    };

    await this.receiverModel.create(doc);

    await this.redisClient.publish('data-channel', JSON.stringify(doc));

    return { statusCode:200,message: 'Data received and published successfully', id: doc.id };
  }
}
