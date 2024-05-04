import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { Equipe } from '../Equipe/entity/equipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipeService } from './service/equipe.service';
import { EquipeController } from './controller/equipe.controller';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Equipe]),
  ],
  controllers: [AppController, EquipeController],
  providers: [AppService, EquipeService],
})
export class EquipeModule {}
