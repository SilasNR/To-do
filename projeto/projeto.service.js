const PorjectDTO = require("./projeto.dto");
const { v4: uuidv4 } = require("uuid");

const Project = [
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

class ProjetoService