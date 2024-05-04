import { Filiacao } from "./filiacao.entity";
import { Equipe } from "./equipe.entity";
export declare class User {
    id_login: number;
    email: string;
    senha: string;
    nome: string;
    secret_question: string;
    status: boolean;
    secretQuestion: string;
    Filiacao: Filiacao[];
    equipe: Equipe[];
}
export default User;
