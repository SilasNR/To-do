import { Column, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Tarefa } from 'src/tarefa/entity/tarefa.entity';
import {Equipe} from "src/equipe/entity/equipe.entity";

export class Projeto{
    @PrimaryGeneratedColumn()
    id_projeto: number;
    
    @Column({length: 15})
    nome_projeto: string;

    @Column()
    data_criacao: Date;

    @Column({length: 10})
    andamento: string;   

    @OneToMany(()=> Tarefa, (Tarefa)=> Tarefa.projeto)
    tarefa: Tarefa[];

    
}
export default Projeto;