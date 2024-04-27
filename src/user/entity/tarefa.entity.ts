import { Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Projeto } from "./projeto.entity";

export class Tarefa{
    @PrimaryGeneratedColumn()
    id_tarefa: number;

    @ManyToOne(()=> Projeto, (Projeto)=>Projeto.tarefa)
    @JoinColumn({name: 'id_projeto'})
    projeto: Projeto;

    @Column({length:20})
    nome: string;

    @Column({length: 100})
    descricao: string;

    @Column()
    data_entrega: Date;

}
