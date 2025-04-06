import { Schema, Document } from 'mongoose';

export interface Receiver extends Document {
  id: string;
  user: string;
  class: string;
  age: number;
  email: string;
  inserted_at: Date;
}

export const ReceiverSchema = new Schema<Receiver>(
  {
    id: { type: String, required: true },
    user: { type: String, required: true },
    class: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    inserted_at: { type: Date, default: Date.now },
  }
);
