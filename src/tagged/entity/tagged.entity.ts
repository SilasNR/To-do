import { Tag } from 'src/tag/entity/tag.entity';
import { Task } from 'src/task/entity/task.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tagged')
export class Tagged {
  @PrimaryColumn()
  tagId: number;

  @PrimaryColumn()
  taskId: number;

  @ManyToOne(() => Tag, (tag) => tag.tagged)
  @JoinColumn({ name: 'tagId' })
  tag: Tag;

  @ManyToOne(() => Task, (task) => task.tagged)
  @JoinColumn({ name: 'taskId' })
  task: Task;
}
