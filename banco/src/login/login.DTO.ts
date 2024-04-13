import { Length, IsString, IsOptional, IsEmail } from "class-validator";
import { filiacao } from "./filiacao.entity";

export class CreateLoginDto{
    @IsEmail()
    @Length(5, 40)
    readonly email: string;

    @IsString()
    @Length(8, 40)
    readonly senha: string;

    @IsString()
    @Length(3, 40)
    readonly nome: string;
 
}

export class UpDateCreateLoginDto{
    
    @IsEmail()
    @Length(5, 40)
    readonly email: string;

    @IsOptional()
    @IsString()
    @Length(3, 40)
    readonly nome: string;
 
}