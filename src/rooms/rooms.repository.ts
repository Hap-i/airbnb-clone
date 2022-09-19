import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { Room, RoomDocument } from './schema/room.schema';

@Injectable()
export class RoomsRepository extends EntityRepository<RoomDocument> {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {
    super(roomModel);
  }
}
