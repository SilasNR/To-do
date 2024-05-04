import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from 'src/user/entity/user.entity';
import { Projeto } from "src/projeto/entity/projeto.entity";


@Entity()

export class Equipe {
    @PrimaryGeneratedColumn()
    id_equipe: number;

    @ManyToOne(() => User, (User) => User.equipe)
    @JoinColumn({ name: 'id_login' })
    user: User;

    @Column()
    status: boolean;

    @Column()
    data_ingressao: Date;
    
}
export default Equipe;