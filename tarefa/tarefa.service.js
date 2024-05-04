const TarefaDTO = require("./tarefa.dto");
const { v4: uuidv4 } = require("uuid");

const tarefa = [
    {
        id_tarefa: uuidv4(),
        id_projeto: 2,
        nome: "tarefa",
        data_entrega: "04/24/2024",
        descricao: "tarefa"
    },
    {
        id_tarefa: uuidv4(),
        id_projeto: 2,
        nome: "tarefa",
        data_entrega: "04/24/2024",
        descricao: "tarefa"
    }
]

class TarefaService {
    create(TarefaDTO) {
        tarefa.push(TarefaDTO);
        return TarefaDTO;
    }

    updade(TarefaDTO) {
        const tarefaIndex = tarefa.findIndex((tarefa) => tarefa.id_tarefa === TarefaDTO.id_tarefa);
        if (tarefaIndex === -1) return null;
        const updadeTarefa = TarefaDTO;
        tarefa[tarefaIndex] = updadeTarefa;
        return updadeTarefa;
    }
    findAll() {
        return tarefa.map((tarefa) => new TarefaDTO(tarefa));
    }

    findOne(id) {
        return tarefa.find((tarefa) => tarefa.id === id);
    }
}

module.exports = TarefaService;