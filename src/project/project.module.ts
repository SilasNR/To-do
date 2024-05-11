import { Module } from '@nestjs/common';
import { Project } from 'src/project/entity/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { ProjectService } from './service/project.service';
import { ProjectController } from './controller/project.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Project])],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService],
})
export class ProjectModule {}
