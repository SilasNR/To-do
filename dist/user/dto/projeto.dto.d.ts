export declare class CreateProjetoDto {
    id_projeto: number;
    nome_projeto: string;
    andamento: string;
    data_criacao: Date;
}
declare const UpDateProjetoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProjetoDto>>;
export declare class UpDateProjetoDto extends UpDateProjetoDto_base {
}
export {};
