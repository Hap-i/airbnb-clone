import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { BookingRepository } from './booking.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from './schema/booking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
  ],
  controllers: [BookingsController],
  providers: [BookingsService, BookingRepository],
})
export class BookingsModule {}
