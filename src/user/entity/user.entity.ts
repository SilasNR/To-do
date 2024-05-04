import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Equipe } from 'src/equipe/entity/equipe.entity'

@Entity('user')

export class User{
    @PrimaryGeneratedColumn()
    id_login: number;

    @Column({unique: true, length: 40})
    email: string;

    @Column({length: 60})
    senha: string;

    @Column({length: 40})
    nome: string; 
    
    @Column({length: 20})
    secret_question: string;
    
    @Column()
    status: boolean;

    @Column({length: 100})
    secretQuestion: string;

    @OneToMany(() => Equipe, (Equipe)=> Equipe.user)
    equipe: Equipe[];
}

export default User;
