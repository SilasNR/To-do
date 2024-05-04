import { User } from "./user.entity";
export declare class Filiacao {
    id_filiacao: number;
    user: User;
    name: string;
    endereco: string;
    cidade: string;
    bairro: string;
    uf: string;
}
export default Filiacao;
