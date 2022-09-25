import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './schema/room.schema';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return await this.roomsService.create(createRoomDto);
  }

  @Get()
  async findAll(): Promise<Room[]> {
    return await this.roomsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Room> {
    return await this.roomsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Promise<Room> {
    return await this.roomsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Room> {
    return await this.roomsService.remove(id);
  }
}
