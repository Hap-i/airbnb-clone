import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { Booking, BookingDocument } from './schema/booking.schema';

@Injectable()
export class BookingRepository extends EntityRepository<BookingDocument> {
  constructor(
    @InjectModel(Booking.name) private bookingDocument: Model<BookingDocument>,
  ) {
    super(bookingDocument);
  }
}
