import { IsInt, IsOptional, IsString, Length, isString } from "class-validator";
import { Column, Timestamp } from "typeorm";


export class CreateProjetoDto{
    @IsString()
    @Length(5,20)
    readonly nome_projeto: string;

    @Column()
    readonly data_criacao: Timestamp;

    @IsString()
    @Column()
    readonly andamento: string;

}

export class UpDateCreateProjetoDto{
    @IsInt()
    @Column()
    readonly id_proprietario: number;
    
    @IsInt()
    @Column()
    readonly id_projeto: number;

    @IsOptional()
    @IsString()
    @Length(5,20)
    readonly nome_projeto: string;

    @Column()
    readonly data_criacao: Timestamp;

    @IsString()
    @Column()
    readonly andamento: string;

}