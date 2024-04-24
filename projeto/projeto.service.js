const PorjectDTO = require("./projeto.dto");
const { v4: uuidv4 } = require("uuid");

const projetos = [
    {
        id_projeto: uuidv4(),
        owner_projeto: 1,
        id_tarefa: 0,
        nome_projeto: "Padaria",
        data_criacao: "20/02/2020"
    },
    {
        id_projeto: uuidv4(),
        owner_projeto: 2,
        id_tarefa: 0,
        nome_projeto: "Farmacia",
        data_criacao: "03/11/2024"
    }
]

class ProjetoService {
    create(PorjectDTO) {
        projetos.push(PorjectDTO);
        return PorjectDTO;
    }

    updade(PorjectDTO) {
        const projetoIndex = projetos.findIndex((projeto) => projeto.id_projeto === PorjectDTO.id_projeto);
        if (projetoIndex === -1) return null;
        const updadeProjeto = PorjectDTO;
        projetos[projetoIndex] = updadeProjeto;
        return updadeProjeto;
    }
    findAll() {
        return projetos.map((projeto) => new PorjectDTO(projeto));
    }

    findOne(id) {
        return projetos.find((projeto) => projeto.id === id);
    }
}

module.exports = ProjetoService;