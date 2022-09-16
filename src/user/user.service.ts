import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hasedPassword = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = hasedPassword;
    return await this.userRepository.create(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find({ active: true });
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ _id: id, active: true });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.findOneAndUpdate(
      { _id: id, active: true },
      updateUserDto,
    );
  }
  async remove(id: string) {
    return await this.userRepository.findOneAndUpdate(
      { _id: id, active: true },
      { active: false },
    );
  }

  async getUserByEmail(email: string): Promise<User> | undefined {
    return await this.userRepository.findOne({
      email,
    });
  }
}
