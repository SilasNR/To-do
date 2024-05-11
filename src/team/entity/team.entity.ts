import { Project } from 'src/project/entity/project.entity';
import { User } from 'src/user/entity/user.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team')
export class Team {
  @PrimaryGeneratedColumn()
  id_team: number;

  @Column()
  is_active: boolean;

  @Column()
  joined_at: Date;

  //usuarios da equipe
  @ManyToOne(() => User, (user) => user.team)
  user: User[];

  //projeto da equipe
  @ManyToOne(() => Project, (project) => project.team)
  project: Project[];
}
