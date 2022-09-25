import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './schema/review.schema';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    return await this.reviewsService.create(createReviewDto);
  }

  @Get()
  async findAll(): Promise<Review[]> {
    return await this.reviewsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.reviewsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ): Promise<Review> {
    return await this.reviewsService.update(id, updateReviewDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Review> {
    return await this.reviewsService.remove(id);
  }

  @Get('/user/:id')
  async getReviewByUser(@Param('id') id: string): Promise<Review[]> {
    return await this.reviewsService.getReviewsByUser(id);
  }

  @Get('/room/:id')
  async getReviewByRoom(@Param('id') id: string): Promise<Review[]> {
    return await this.reviewsService.getReviewsByRoom(id);
  }
}
