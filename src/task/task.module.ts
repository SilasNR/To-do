import { Module } from '@nestjs/common';
import { Task } from 'src/task/entity/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { TaskService } from './service/task.service';
import { TaskController } from './controller/task.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Task])],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class TaskModule {}
