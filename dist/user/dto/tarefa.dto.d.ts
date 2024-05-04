export declare class CreateTarefaDto {
    id_tarefa: number;
    nome: string;
    descricao: string;
    data_entrega: Date;
}
declare const UpDateTarefaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTarefaDto>>;
export declare class UpDateTarefaDto extends UpDateTarefaDto_base {
}
export {};
