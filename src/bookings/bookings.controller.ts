import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './schema/booking.schema';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return await this.bookingsService.create(createBookingDto);
  }

  @Get()
  async findAll(): Promise<Booking[]> {
    return await this.bookingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Booking> {
    return await this.bookingsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    return await this.bookingsService.update(id, updateBookingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Booking> {
    return await this.bookingsService.remove(id);
  }

  @Get('/user/:id')
  async getBookingsByUser(@Param('id') id: string): Promise<Booking[]> {
    return await this.bookingsService.getBookingsByUser(id);
  }

  @Get('/room/:id')
  async getBookingsByRoom(@Param('id') id: string): Promise<Booking[]> {
    return await this.bookingsService.getBookingsByRoom(id);
  }
}
