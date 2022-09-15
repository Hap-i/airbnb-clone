import { NotFoundException } from '@nestjs/common';
import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T> {
    return this.entityModel.findOne(entityFilterQuery, {
      ...projection,
    });
  }

  async find(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery, {
      ...projection,
    });
  }

  async create(createEntityData: unknown): Promise<T> {
    const entity = await this.entityModel.create(createEntityData);
    entity.save();
    return entity;
  }
  async findOneAndUpdate(filterQuery: FilterQuery<T>, update: UpdateQuery<T>) {
    const document = await this.entityModel.findOneAndUpdate(
      filterQuery,
      update,
      {
        lean: true,
        new: true,
      },
    );

    if (!document) {
      throw new NotFoundException('Document not found.');
    }

    return document;
  }
}
