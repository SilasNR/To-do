import { Module } from '@nestjs/common';
import { Team } from 'src/team/entity/team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { TeamService } from './service/team.service';
import { TeamController } from './controller/team.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Team])],
  controllers: [AppController, TeamController],
  providers: [AppService, TeamService],
})
export class TeamModule {}
