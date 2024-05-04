import { Equipe } from "./equipe.entity";
import { Tarefa } from "./tarefa.entity";
import { Column, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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
    
    @OneToMany(()=> Equipe, (Equipe)=> Equipe.projeto)
    equipe: Equipe[];
}

export default Projeto;