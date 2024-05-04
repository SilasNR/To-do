import { Equipe } from "./equipe.entity";
import { Tarefa } from "./tarefa.entity";
export declare class Projeto {
    id_projeto: number;
    nome_projeto: string;
    data_criacao: Date;
    andamento: string;
    tarefa: Tarefa[];
    equipe: Equipe[];
}
export default Projeto;
