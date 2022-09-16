import { Body, Controller, Post, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/schema/user.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.signup(createUserDto);
  }

  @Post('signin')
  async signin(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ accessToken: string }> {
    const token = await this.authService.signin(body.email, body.password);
    response.cookie(this.configService.get('JWT_COOKIE'), token.accessToken, {
      httpOnly: true,
      secure: false,
    });
    return token;
  }
}
