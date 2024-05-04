import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Etiqueta{
    @PrimaryGeneratedColumn()
    id_etiqueta: number;

    @Column({length: 20})
    nome_etiqueta: string;

    @Column()
    cor: number;
}
export default Etiqueta;