import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoomsModule } from './rooms/rooms.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ReviewsModule } from './reviews/reviews.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`./.env.${process.env.STAGE}`],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return { uri: configService.get('DATABASE_URL') };
      },
    }),
    AuthModule,
    UserModule,
    RoomsModule,
    ReviewsModule,
    BookingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
