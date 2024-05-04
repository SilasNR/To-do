import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Projeto } from '../entity/projeto.entity';
import { CreateProjetoDto, UpDateProjetoDto } from '../dto/projeto.dto';

@Injectable()
export class ProjetoService {
    constructor(
        @InjectRepository(Projeto)
         private projetoRepository: Repository<Projeto>
    ) {}

    async findAll(): Promise<Projeto[]> {
        return await this.projetoRepository.find({relations: ['projetos']});        
    }

    async findOne(id: number): Promise<Projeto> {
        const projeto = await this.projetoRepository.findOne({
            where: {id_projeto: id},
            relations: ['projetos'],
        });
        
        if (!projeto) {
            throw new HttpException(`Projeto não encontrado.`, HttpStatus.NOT_FOUND);
        }
        return projeto;
    }

    async create ( createProjetoDto: CreateProjetoDto): Promise<Projeto>{
        try {
            return await this.projetoRepository.save(
                this.projetoRepository.create(createProjetoDto)
            )
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Projeto já registrado.', HttpStatus.BAD_REQUEST)                
            } else {
                throw new HttpException(
                    'Erro ao criar o projeto. Tente novamente mais tarde',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }            
        }
    }
    
    async update(id: number, updateProjetoDto: UpDateProjetoDto): Promise<void> {
        const result = await this.projetoRepository.update(id, updateProjetoDto);
        if (result.affected === 0) {
            throw new HttpException(`Projeto não econtrado.`,HttpStatus.NOT_FOUND);
        }
    }

    async delete (id: number): Promise<void> {
        const result = await this.projetoRepository.delete(id);
        if(result.affected === 0 ){
            throw new HttpException(`Projeto não encontrado`, HttpStatus.NOT_FOUND);
        }
    }
}
