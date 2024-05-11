import { Project } from 'src/project/entity/project.entity';
import { Team } from 'src/team/entity/team.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
// import { Equipe } from "./equipe.entity";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ unique: true, length: 40 })
  username: string;

  @Column({ unique: true, length: 40 })
  email: string;

  @Column()
  password: string;

  @Column()
  status: boolean;

  @Column({ length: 20 })
  secret_question: string;

  // dono do projeto
  @ManyToOne(() => Project, (project) => project.user)
  project: Project[];

  // equipes do usuario
  @OneToMany(() => Team, (team) => team.user)
  team: Team[];
}
