import { IsString, Length, IsInt, IsNumber, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm';

export class CreateEquipeDto{

    @IsNumber()
    @Column()
    id_equique: number;

    @IsString()
    @Length(4,20, { message: 'tamanho minimo para o nome é de 4 caracteres'})
    nome: string;

    @IsBoolean()
    @Column()
    status: boolean;

    @Column()
    data_ingressao: Date;

}

export class UpDateEquipeDto extends PartialType(CreateEquipeDto) {}