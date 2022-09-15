import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/airbnb-clone'),
    AuthModule,
    UserModule,
    RoomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
