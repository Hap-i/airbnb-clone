import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Room {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ min: 1, required: true })
  allowedGuest: number;

  @Prop({ min: 1, required: true })
  bedRoom: number;

  @Prop({ min: 1, required: true })
  bed: number;

  @Prop({ min: 1, required: true })
  bathroom: number;

  @Prop({
    type: [String],
    enum: ['Shampoo', 'Hot Water'],
  })
  bathroomAmenities: string[];

  @Prop({
    type: [String],
    enum: ['Refrigerator', 'Oven'],
  })
  kitchenAmenities: string[];

  @Prop({
    type: [String],
    enum: ['Washing machine', 'Essentials', 'Hangers', 'Iron', 'Mosquito net'],
  })
  laundryAmenities: string[];

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  city: string;

  @Prop(
    raw({
      type: { type: String, enum: ['Point'], required: true },
      coordinates: { type: [Number], required: true },
    }),
  )
  location: Record<string, any>;

  @Prop({ default: true })
  active: boolean;
}

export type RoomDocument = Room & Document;

export const RoomSchema = SchemaFactory.createForClass(Room);
