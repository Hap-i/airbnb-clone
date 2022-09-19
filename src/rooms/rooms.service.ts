import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
  constructor(private readonly roomRepository: RoomsRepository) {}

  create(createRoomDto: CreateRoomDto) {
    return this.roomRepository.create(createRoomDto);
  }

  findAll() {
    return this.roomRepository.find({ active: true });
  }

  findOne(id: string) {
    return this.roomRepository.findOne({ _id: id });
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    return this.roomRepository.findOneAndUpdate(
      { _id: id, active: true },
      updateRoomDto,
    );
  }

  remove(id: string) {
    return this.roomRepository.findOneAndUpdate(
      { _id: id, active: true },
      { active: false },
    );
  }
}
