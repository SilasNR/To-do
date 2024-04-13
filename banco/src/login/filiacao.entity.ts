import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Login } from "./login.entity";

@Entity()
export class filiacao{
    @PrimaryGeneratedColumn()
    id_filiacao: number;

    @OneToMany(() => Login, (Login) => Login.filiacao )
    @JoinColumn({name: 'id_login'})
    login: Login;

    @Column({length: 40})
    name: string;

    @Column({length: 40})
    endereco: string;

    @Column({length: 30})
    cidade: string;

    @Column({length: 40})
    bairro: string;

    @Column({length: 40})
    uf: string;
    
}