import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { Tarefa } from '../tarefa/entity/tarefa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefaService } from './service/tarefa.service';
import { TarefaController } from './controller/tarefa.controller';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([ Tarefa ]),
  ],
  controllers: [AppController, TarefaController],
  providers: [AppService, TarefaService],
})
export class TarefaModule {}
