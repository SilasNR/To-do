import { Repository } from 'typeorm';
import { Projeto } from '../entity/projeto.entity';
import { CreateProjetoDto, UpDateProjetoDto } from '../dto/projeto.dto';
export declare class ProjetoService {
    private projetoRepository;
    constructor(projetoRepository: Repository<Projeto>);
    findAll(): Promise<Projeto[]>;
    findOne(id: number): Promise<Projeto>;
    create(createProjetoDto: CreateProjetoDto): Promise<Projeto>;
    update(id: number, updateProjetoDto: UpDateProjetoDto): Promise<void>;
    delete(id: number): Promise<void>;
}
