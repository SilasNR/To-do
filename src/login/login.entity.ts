import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { filiacao } from "./filiacao.entity";
import { Equipe } from "src/equipe/equipe.entity";
import { Projeto } from "src/projeto/projeto.entity";


@Entity()

export class Login{
    @PrimaryGeneratedColumn()
    id_login: number;

    @Column({unique: true, length: 40})
    email: string;

    @Column({length: 60})
    senha: string;

    @Column({length: 40})
    nome: string; 

    @Column()
    status: boolean;

    @OneToMany(() => Projeto, (Projeto)=>Projeto.login)
    projeto: Projeto[];

    @OneToMany(() => filiacao, (filiacao)=> filiacao.login)
    filiacao: filiacao[];

    @OneToMany(() => Equipe, (Equipe)=> Equipe.login)
    equipe: Equipe[];
}
