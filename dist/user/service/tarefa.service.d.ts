import { Repository } from 'typeorm';
import { Tarefa } from '../entity/tarefa.entity';
import { CreateTarefaDto, UpDateTarefaDto } from '../dto/tarefa.dto';
export declare class TarefaService {
    private tarefaRepository;
    constructor(tarefaRepository: Repository<Tarefa>);
    findAll(): Promise<Tarefa[]>;
    findOne(id: number): Promise<Tarefa>;
    create(createTarefaDto: CreateTarefaDto): Promise<Tarefa>;
    update(id: number, updateTarefaDto: UpDateTarefaDto): Promise<void>;
    delete(id: number): Promise<void>;
}
