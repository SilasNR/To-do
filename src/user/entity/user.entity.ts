import { Project } from 'src/project/entity/project.entity';
import { Team } from 'src/team/entity/team.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

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

  @Column({ length: 20 })
  secret_question: string;

  // dono do projeto
  @OneToMany(() => Project, (project) => project.user)
  project: Project[];

  // equipes do usuario
  @OneToMany(() => Team, (team) => team.user)
  team: Team[];
}
