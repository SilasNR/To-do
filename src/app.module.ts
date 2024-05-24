import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { TagModule } from './tag/tag.module';
import { TeamModule } from './team/team.module';
import { TaggedModule } from './tagged/tagged.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, ProjectModule, TaskModule, TagModule, TeamModule, TaggedModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
