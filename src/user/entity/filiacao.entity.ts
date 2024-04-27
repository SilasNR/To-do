import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity"

@Entity('filiacao')
export class filiacao{
    @PrimaryGeneratedColumn()
    id_filiacao: number;

    @ManyToOne(() => User, (User) => User.filiacao )
    @JoinColumn({name: 'id_login'})
    user: User;

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

export default filiacao;