import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { Projeto } from '../Projeto/entity/projeto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjetoService } from './service/projeto.service';
import { ProjetoController } from './controller/projeto.controller';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Projeto]),
  ],
  controllers: [AppController, ProjetoController],
  providers: [AppService, ProjetoService],
})
export class ProjetoModule {}
