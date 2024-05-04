export declare class CreateEtiquetaDto {
    id_etiqueta: number;
    nome_etiqueta: string;
    cor: number;
}
declare const UpDateEtiquetaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEtiquetaDto>>;
export declare class UpDateEtiquetaDto extends UpDateEtiquetaDto_base {
}
export {};
