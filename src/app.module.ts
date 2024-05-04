import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { EquipeModule } from './equipe/equipe.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TarefaModule } from './tarefa/tarefa.module';
import { EtiquetaModule } from './etiqueta/etiqueta.module';

@Module({
  imports: [DatabaseModule, UserModule, EquipeModule, ProjetoModule, TarefaModule, EtiquetaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
