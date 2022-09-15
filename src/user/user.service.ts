import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find({ active: true });
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.findOneAndUpdate(
      { _id: id },
      updateUserDto,
    );
  }
  async remove(id: string) {
    return await this.userRepository.findOneAndUpdate(
      { _id: id },
      { active: false },
    );
  }
}
