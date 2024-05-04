import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Etiqueta from '../entity/etiqueta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EtiquetaService {

    constructor(
        @InjectRepository(Etiqueta)
        private etiquetaRepository: Repository<Etiqueta>,
    ) { }

    async findAll(): Promise<Etiqueta[]> {
        return await this.etiquetaRepository.find({
            relations: ['etiqueta']
        });
    }

    async findOne(id: number): Promise<Etiqueta>{
        const etiqueta = await this.etiquetaRepository.findOne({
            where: {id_etiqueta: id},
            relations: ['etiqueta']
        })

        if(!etiqueta) {
            throw new HttpException(`Etiqueta não encontrada`, HttpStatus.NOT_FOUND)
        }
        return etiqueta;
    }
}
