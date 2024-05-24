import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    imports: [
      TypeOrmModule.forFeature([User]),
      JwtModule.register({
        secret: process.env.JWT_SECRET, 
        signOptions: { expiresIn: '60m' },
      }),
      UserModule,
      PassportModule,
    ],
    providers: [AuthService, JwtStrategy, AuthService],
    controllers: [AuthController],
  })
  export class AuthModule {}
