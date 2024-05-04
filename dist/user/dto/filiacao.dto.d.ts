export declare class CreateFiliacaoDto {
    nome: string;
    endereco: string;
    cidade: string;
    bairro: string;
    uf: string;
    userId: number;
}
declare const UpDateFiliacaoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFiliacaoDto>>;
export declare class UpDateFiliacaoDto extends UpDateFiliacaoDto_base {
}
export {};
