import { Module } from '@nestjs/common';
import { Tag } from 'src/tag/entity/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { TagService } from './service/tag.service';
import { TagController } from './controller/tag.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Tag])],
  controllers: [AppController, TagController],
  providers: [AppService, TagService],
})
export class TagModule {}
