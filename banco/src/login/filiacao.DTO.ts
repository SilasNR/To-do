import { Length, IsString, IsOptional } from "class-validator";

export class CreateFiliacaoDto{

    @IsString()
    @Length(3, 40)
    readonly nome: string;

    @IsString()
    @Length(3, 40)
    readonly endereco: string;

    @IsString()
    @Length(3, 30)
    readonly cidade: string;
    
    @IsString()
    @Length(3, 40)
    readonly bairro: string;

    @IsString()
    @Length(2, 2)
    readonly uf: string;    
}

export class UpDateFiliacaoDto{
    @IsOptional()
    @IsString()
    @Length(3, 40)
    readonly nome: string;
    @IsOptional()
    @IsString()
    @Length(3, 40)
    readonly endereco: string;
    @IsOptional()
    @IsString()
    @Length(3, 30)
    readonly cidade: string;
    @IsOptional()
    @IsString()
    @Length(3, 40)
    readonly bairro: string;
    @IsOptional()
    @IsString()
    @Length(2, 2)
    readonly uf: string;  
}