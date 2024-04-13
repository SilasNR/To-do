class Project {
    constructor({ id_projeto, owner_projeto, id_tarefa, nome_projeto, data_criacao, status }) {
        this.setId(id_projeto);
        this.setOwner_projeto(owner_projeto);
        this.setId_tarefa(id_tarefa);
        this.setNome_projeto(nome_projeto);
        this.setData_criacao(data_criacao);
        this.setStatus(status);
    }

    // Validação do ID
    setId(id_projeto) {
        //if (!id_projeto) throw new Error("ID is required");
        this.id_projeto = id_projeto;
    }

    setOwner_projeto(owner_projeto) {
        // if(!owner_projeto) throw new Error("")
        this.owner_projeto = owner_projeto;
    }

    setId_tarefa(id_tarefa) {
        // if(!id_tarefa) throw new Error("")
        this.id_tarefa = id_tarefa;
    }
}



module.exports = Project;