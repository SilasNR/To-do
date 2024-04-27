import { IsString, Length, IsInt, IsNumber, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm';

export class CreateProjetoDto{
    
    @IsNumber()
    @Column()
    id_projeto: number;

    @IsString()
    @Length(4,20, { message: 'tamanho minimo para o nome é de 4 caracteres'})
    nome_projeto: string;

    @IsString()
    @Length(4,20, { message: 'tamanho minimo para o nome é de 4 caracteres'})
    andamento: string;

    @IsDate()
    @Column()
    data_criacao: Date;
}

export class UpDateProjetoDto extends PartialType(CreateProjetoDto){}