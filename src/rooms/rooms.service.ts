import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomsRepository } from './rooms.repository';
import { Room } from './schema/room.schema';

@Injectable()
export class RoomsService {
  constructor(private readonly roomRepository: RoomsRepository) {}

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    return await this.roomRepository.create(createRoomDto);
  }

  async findAll(): Promise<Room[]> {
    return await this.roomRepository.find({ active: true });
  }

  async findOne(id: string): Promise<Room> {
    return await this.roomRepository.findOne({ _id: id });
  }

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    return await this.roomRepository.findOneAndUpdate(
      { _id: id, active: true },
      updateRoomDto,
    );
  }

  async remove(id: string): Promise<Room> {
    return await this.roomRepository.findOneAndUpdate(
      { _id: id, active: true },
      { active: false },
    );
  }
}
