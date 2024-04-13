import { Equipe } from "src/equipe/equipe.entity";
import { Login } from "src/login/login.entity";
import { Tarefa } from "src/tarefa/tarefa.entity";
import { Column, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

export class Projeto{
    @PrimaryGeneratedColumn()
    id_projeto: number;

    @OneToMany(()=> Tarefa, (tarefa)=>tarefa.id_tarefa)
    @JoinColumn({name: 'id_tarefa'})
    id_tarefa: Tarefa;

    @OneToMany(() => Login, (Login) => Login.projeto)
    @JoinColumn({name: 'id_login'})
    login: Login;

    @Column({length: 15})
    nome_projeto: string;

    @Column()
    data_criacao: Timestamp;

    @Column({length: 10})
    andamento: string;
    
    

    @OneToOne(()=> Equipe, (Equipe)=>Equipe.id_projeto)
    equipe: Equipe[];
    
    
}