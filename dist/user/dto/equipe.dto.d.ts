export declare class CreateEquipeDto {
    id_equique: number;
    nome: string;
    status: boolean;
    data_ingressao: Date;
}
declare const UpDateEquipeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEquipeDto>>;
export declare class UpDateEquipeDto extends UpDateEquipeDto_base {
}
export {};
