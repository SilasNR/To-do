import { User } from "./user.entity";
import { Projeto } from "./projeto.entity";
export declare class Equipe {
    id_equipe: number;
    id_projeto: Projeto;
    user: User;
    status: boolean;
    data_ingressao: Date;
    projeto: any;
}
export default Equipe;
