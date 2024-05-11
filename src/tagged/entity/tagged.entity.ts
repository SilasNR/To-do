import { Tag } from 'src/tag/entity/tag.entity';
import { Task } from 'src/task/entity/task.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tagged')
export class Tagged {
  @PrimaryGeneratedColumn()
  id_tagged: number;

  // tags da tarefa
  @ManyToOne(() => Tag, (tag) => tag.tagged)
  tag: Tag[];

  // tarefas com a tag
  @ManyToOne(() => Task, (task) => task.tagged)
  task: Task[];
}
