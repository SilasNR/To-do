import { Tagged } from 'src/tagged/entity/tagged.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn()
  id_tag: number;

  @Column({ length: 20 })
  name: string;

  @Column()
  color: number;

  // tarefas com a tag
  @OneToMany(() => Tagged, (tagged) => tagged.tag)
  tagged: Tagged[];
}
