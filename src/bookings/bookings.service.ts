import { Injectable } from '@nestjs/common';
import { BookingRepository } from './booking.repository';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './schema/booking.schema';

@Injectable()
export class BookingsService {
  constructor(private readonly bookingRepository: BookingRepository) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    return await this.bookingRepository.create(createBookingDto);
  }

  async findAll(): Promise<Booking[]> {
    return await this.bookingRepository.find({ active: true });
  }

  async findOne(id: string): Promise<Booking> {
    return await this.bookingRepository.findOne({ _id: id, active: true });
  }

  async update(
    id: string,
    updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    return await this.bookingRepository.findOneAndUpdate(
      { _id: id, active: true },
      updateBookingDto,
    );
  }

  async remove(id: string): Promise<Booking> {
    return await this.bookingRepository.findOneAndUpdate(
      { _id: id, active: true },
      { active: false },
    );
  }

  async getBookingsByRoom(roomId: string): Promise<Booking[]> {
    return await this.bookingRepository.find({ room: roomId });
  }

  async getBookingsByUser(userId: string): Promise<Booking[]> {
    return await this.bookingRepository.find({ user: userId });
  }
}
