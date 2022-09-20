import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { Room } from 'src/rooms/schema/room.schema';
import { User } from 'src/user/schema/user.schema';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  reviewText: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsNotEmpty()
  @IsString()
  user: User;

  @IsNotEmpty()
  @IsString()
  room: Room;
}
