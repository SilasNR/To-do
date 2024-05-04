import { Repository } from 'typeorm';
import { filiacao } from '../entity/filiacao.entity';
import { CreateFiliacaoDto, UpDateFiliacaoDto } from '../dto/filiacao.dto';
export declare class FiliacaoService {
    private filiacaoRepository;
    constructor(filiacaoRepository: Repository<filiacao>);
    findAll(): Promise<filiacao[]>;
    findOne(id: number): Promise<filiacao>;
    create(createFiliacao: CreateFiliacaoDto): Promise<filiacao>;
    update(id: number, updateFiliacao: UpDateFiliacaoDto): Promise<void>;
    delete(id: number): Promise<void>;
}
