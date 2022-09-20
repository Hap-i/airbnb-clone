import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { Review, ReviewDocument } from './schema/review.schema';

@Injectable()
export class ReviewsRepository extends EntityRepository<ReviewDocument> {
  constructor(
    @InjectModel(Review.name) private reviewDocument: Model<ReviewDocument>,
  ) {
    super(reviewDocument);
  }
}
