import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, Timestamp } from "typeorm";
import { Login } from "src/login/login.entity";
import { Projeto } from "src/projeto/projeto.entity";
@Entity()

export class Equipe{
    @OneToOne(()=> Projeto, (Projeto)=>Projeto.equipe)
    @JoinColumn({name: 'id_projeto'})
    id_projeto: number;

    @OneToMany(() => Login, (Login)=> Login.equipe)
    @JoinColumn({name: 'id_login'})
    login: Login;

    @Column()
    status: boolean;

    @Column()
    data_ingressao: Timestamp;
}