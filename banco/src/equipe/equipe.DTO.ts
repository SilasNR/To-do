import { IsOptional } from "class-validator";
import { Column, Timestamp } from "typeorm";

export class CreateEquipeDTO{
    
    @Column()
    readonly data_ingressao: Timestamp;

    @Column()
    readonly status: boolean;

}

export class UpDateCreateEquipeDTO{
    
    @Column()
    readonly id_projeto: number;
    
    @IsOptional()
    @Column()
    readonly data_ingressao: Timestamp;

    @IsOptional()
    @Column()
    readonly status: boolean;
    
}