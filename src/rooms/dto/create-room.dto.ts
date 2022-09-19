import { IsNotEmpty } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  allowedGuest: number;

  @IsNotEmpty()
  bedRoom: number;

  @IsNotEmpty()
  bed: number;

  @IsNotEmpty()
  bathroom: number;

  @IsNotEmpty()
  bathroomAmenities: string[];

  @IsNotEmpty()
  kitchenAmenities: string[];

  @IsNotEmpty()
  laundryAmenities: string[];

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  location: Record<string, any>;
}
