import { Injectable } from '@nestjs/common';
import { BookingRepository } from './booking.repository';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private readonly bookingRepository: BookingRepository) {}

  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepository.create(createBookingDto);
  }

  findAll() {
    return this.bookingRepository.find({ active: true });
  }

  findOne(id: string) {
    return this.bookingRepository.findOne({ _id: id, active: true });
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepository.findOneAndUpdate(
      { _id: id, active: true },
      updateBookingDto,
    );
  }

  remove(id: string) {
    return this.bookingRepository.findOneAndUpdate(
      { _id: id, active: true },
      { active: false },
    );
  }
}
