import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewsRepository } from './reviews.repository';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewRepository: ReviewsRepository) {}

  create(createReviewDto: CreateReviewDto) {
    return this.reviewRepository.create(createReviewDto);
  }

  findAll() {
    return this.reviewRepository.find({ active: true });
  }

  findOne(id: string) {
    return this.reviewRepository.findOne({ _id: id, active: true });
  }

  update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.reviewRepository.findOneAndUpdate(
      { _id: id, active: true },
      updateReviewDto,
    );
  }

  remove(id: string) {
    return this.reviewRepository.findOneAndUpdate(
      { _id: id, active: true },
      { active: false },
    );
  }
}
