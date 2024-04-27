import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { User } from './entity/user.entity'
import { filiacao } from './entity/filiacao.entity'
import { Equipe } from './entity/equipe.entity';
import { Projeto } from './entity/projeto.entity';
import { Tarefa } from './entity/tarefa.entity';
import { Etiqueta } from './entity/etiqueta.entity';
import { UserService } from './service/user.service';
import { FiliacaoService } from './service/filiacao.service';
import { ProjetoService } from './service/projeto.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User, filiacao, Equipe, Projeto, Tarefa, Etiqueta ]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, FiliacaoService, ProjetoService],
})
export class UserModule {}