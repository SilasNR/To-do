import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { Etiqueta } from '../Etiqueta/entity/etiqueta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtiquetaService } from './service/etiqueta.service';
import { EtiquetaController } from './controller/etiqueta.controller';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Etiqueta]),
  ],
  controllers: [AppController, EtiquetaController],
  providers: [AppService, EtiquetaService],
})
export class EtiquetaModule {}
