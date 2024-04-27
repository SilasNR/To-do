class Project {
    constructor({id_tarefa, id_projeto, nome, data_entrega, descricao }) {
        this.setId_tarefa(id_tarefa)
        this.setId_projeto(id_projeto);
        this.setNome(nome);
        this.setData_entrega(data_entrega);
        this.setdescricao(descricao);
    }

    // Validação do ID
    setId_projeto(id_projeto) {
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

    setNome(nome){
        this.nome = nome;
    }

    setData_entrega(data_entrega){
        this.data_entrega = data_entrega;
    }

    setdescricao(descricao){
        this.descricao = descricao;
    }
}



module.exports = Project;