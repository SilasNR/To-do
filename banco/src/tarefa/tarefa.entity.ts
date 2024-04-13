import { Projeto } from "src/projeto/projeto.entity";
import { OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Tarefa{
    @PrimaryGeneratedColumn()
    id_tarefa: number;

    @OneToMany(()=>Projeto, (Projeto)=> Projeto.id_tarefa)
    tarefa: Tarefa[];
}