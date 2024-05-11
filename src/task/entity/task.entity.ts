import { Tagged } from 'src/tagged/entity/tagged.entity';
import { Project } from 'src/project/entity/project.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id_task: number;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 100 })
  description: string;

  @Column()
  deadline: Date;

  // projeto da tarefa
  @ManyToOne(() => Project, (project) => project.task)
  project: Project[];

  // tags da tarefa
  @OneToMany(() => Tagged, (tagged) => tagged.task)
  tagged: Tagged[];
}
