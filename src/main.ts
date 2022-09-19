import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT') | 3000;
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));
  app.use(cookieParser());
  await app.listen(PORT);
}
bootstrap();
