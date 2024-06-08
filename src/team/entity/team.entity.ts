import { Project } from 'src/project/entity/project.entity';
import { User } from 'src/user/entity/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('team')
export class Team {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  projectId: number;

  //usuarios da equipe
  @ManyToOne(() => User, (user) => user.team)
  @JoinColumn({ name: 'userId' })
  user: User[];

  //projeto da equipe
  @ManyToOne(() => Project, (project) => project.team)
  @JoinColumn({ name: 'projectId' })
  project: Project[];
}
