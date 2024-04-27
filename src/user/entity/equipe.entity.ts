import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Projeto } from "./projeto.entity";

@Entity()

export class Equipe {
    @PrimaryGeneratedColumn()
    id_equipe: number;

    @ManyToOne(() => Projeto, (Projeto) => Projeto.equipe)
    @JoinColumn({ name: 'id_projeto'})
    id_projeto: Projeto;

    @ManyToOne(() => User, (User) => User.equipe)
    @JoinColumn({ name: 'id_login' })
    user: User;

    @Column()
    status: boolean;

    @Column()
    data_ingressao: Date;
    projeto: any;
    
}
