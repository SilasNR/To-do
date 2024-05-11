import { Module } from '@nestjs/common';
import { Tagged } from 'src/tagged/entity/tagged.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { TaggedService } from './service/tagged.service';
import { TaggedController } from './controller/tagged.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Tagged])],
  controllers: [AppController, TaggedController],
  providers: [AppService, TaggedService],
})
export class TaggedModule {}
