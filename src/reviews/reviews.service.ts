import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewsRepository } from './reviews.repository';
import { Review } from './schema/review.schema';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewRepository: ReviewsRepository) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    return await this.reviewRepository.create(createReviewDto);
  }

  async findAll(): Promise<Review[]> {
    return await this.reviewRepository.find({ active: true });
  }

  async findOne(id: string): Promise<Review> {
    return await this.reviewRepository.findOne({ _id: id, active: true });
  }

  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    return await this.reviewRepository.findOneAndUpdate(
      { _id: id, active: true },
      updateReviewDto,
    );
  }

  async remove(id: string): Promise<Review> {
    return await this.reviewRepository.findOneAndUpdate(
      { _id: id, active: true },
      { active: false },
    );
  }

  async getReviewsByUser(userId: string): Promise<Review[]> {
    return await this.reviewRepository.find({ user: userId });
  }

  async getReviewsByRoom(roomId: string): Promise<Review[]> {
    return await this.reviewRepository.find({ room: roomId });
  }
}
