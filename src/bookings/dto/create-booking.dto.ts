import { IsDateString, IsNotEmpty } from 'class-validator';
import { Room } from 'src/rooms/schema/room.schema';
import { User } from 'src/user/schema/user.schema';

export class CreateBookingDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  room: Room;

  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  endDate: Date;

  @IsNotEmpty()
  adultCount: number;

  @IsNotEmpty()
  childrenCount: number;

  @IsNotEmpty()
  bookingStatus: string;

  @IsNotEmpty()
  paymentStatus: string;
}
