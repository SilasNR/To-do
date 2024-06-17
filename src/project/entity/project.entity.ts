import { Task } from 'src/task/entity/task.entity';
import { User } from 'src/user/entity/user.entity';
import { Team } from 'src/team/entity/team.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id_project: number;

  @Column({ length: 20 })
  name_project: string;

  @Column({ length: 20 })
  status_project: string;

  @Column({ length: 200 })
  resume_project: string;

  // dono do projeto
  @ManyToOne(() => User, (user) => user.project)
  user: User[];

  @Column()
  userIdUser: number;

  // tarefas do projeto
  @OneToMany(() => Task, (task) => task.project)
  task: Task[];

  @Column()
  taskIdTask: number;

  // equipe do projeto
  @OneToMany(() => Team, (team) => team.project)
  team: Team[];
}
