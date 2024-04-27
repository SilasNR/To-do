import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { filiacao }from '../entity/filiacao.entity';
import { CreateFiliacaoDto, UpDateFiliacaoDto } from '../dto/filiacao.dto';

@Injectable()
export class FiliacaoService {
    constructor(
    @InjectRepository(filiacao)
    private filiacaoRepository: Repository<filiacao>,
    ) {}

    async findAll (): Promise<filiacao[]>{
        return await this.filiacaoRepository.find({ relations: ['filiacoes']})
    }

    async findOne(id: number): Promise<filiacao> {
        const Filiacao = await this.filiacaoRepository.findOne({
            where: {id_filiacao: id},
            relations: ['filiacoes'],
        });
        
        if (!Filiacao) {
            throw new HttpException(`Projeto não encontrado.`, HttpStatus.NOT_FOUND);
        }
        return Filiacao;
    }
    async create(createFiliacao: CreateFiliacaoDto): Promise<filiacao> {
        try {
            return await this.filiacaoRepository.save(
                this.filiacaoRepository.create(createFiliacao)
            );
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Filiacao já registrado.', HttpStatus.BAD_REQUEST)                
            } else {
                throw new HttpException(
                    'Erro ao registrar nova filiacao. Tente novamente mais tarde',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }            
        }
    }

    async update(id: number, updateFiliacao: UpDateFiliacaoDto): Promise<void> {
        const result = await this.filiacaoRepository.update(id, updateFiliacao);
        if (result.affected === 0) {
            throw new HttpException(`filiacao não econtrada.`,HttpStatus.NOT_FOUND);
        }
    }

    async delete (id: number): Promise<void> {
        const result = await this.filiacaoRepository.delete(id);
        if(result.affected === 0 ){
            throw new HttpException(`filiacao não encontrada`, HttpStatus.NOT_FOUND);
        }
    }
}
