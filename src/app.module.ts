import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoomsModule } from './rooms/rooms.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
    MongooseModule.forRoot('mongodb://localhost:27017/airbnb-clone'),
    AuthModule,
    UserModule,
    RoomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
