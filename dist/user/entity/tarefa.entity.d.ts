import { Projeto } from "./projeto.entity";
export declare class Tarefa {
    id_tarefa: number;
    projeto: Projeto;
    nome: string;
    descricao: string;
    data_entrega: Date;
}
export default Tarefa;
