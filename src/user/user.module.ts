import { Module } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class UserModule {}
