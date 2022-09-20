import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Room } from 'src/rooms/schema/room.schema';
import { User } from 'src/user/schema/user.schema';

@Schema({ timestamps: true })
export class Review {
  @Prop({ required: true })
  reviewText: string;

  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Room' })
  room: Room;

  @Prop({ default: true })
  active: boolean;
}

export type ReviewDocument = Review & Document;

export const ReviewSchema = SchemaFactory.createForClass(Review);
