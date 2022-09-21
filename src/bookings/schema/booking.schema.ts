import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Room } from 'src/rooms/schema/room.schema';
import { User } from 'src/user/schema/user.schema';

@Schema({ timestamps: true })
export class Booking {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true })
  room: Room;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  adultCount: number;

  @Prop({ required: true })
  childrenCount: number;

  @Prop({
    required: true,
    type: String,
    enum: ['Confirmed', 'Canceled', 'Completed'],
  })
  bookingStatus: string;

  @Prop({
    required: true,
    type: String,
    enum: ['Not Paid', 'On hold', 'Paid'],
  })
  paymentStatus: string;

  @Prop({ default: true })
  active: boolean;
}

export type BookingDocument = Booking & Document;

export const BookingSchema = SchemaFactory.createForClass(Booking);
