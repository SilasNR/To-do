import { IsString, Length, IsInt, IsNumber, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Column} from 'typeorm';

export class CreateEtiquetaDto{

    @IsNumber()
    @Column()
    id_etiqueta: number;

    @IsString()
    @Length(4,20, { message: 'tamanho minimo para o nome é de 4 caracteres'})
    nome_etiqueta: string;

    @IsNumber()
    @Column()
    cor: number;

}

export class UpDateEtiquetaDto extends PartialType (CreateEtiquetaDto){
}