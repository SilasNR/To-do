const TarefaDTO = require("./tarefa.dto.js");
const TarefaService = require("./tarefa.service.js");
const { v4: uuidv4 } = require("uuid");

const tarefaService = new TarefaService();

class TarefaController {
    createTarefa(req, res) {
      const id = uuidv4()
      req.body.id_tarefa = id;
      try {
        res.json(tarefaService.create(new TarefaDTO(req.body, true)));
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    }
  
    getAllTarefa(req, res) {
      const tarefa = tarefaService.findAll();
      res.json(tarefa);
    }
  
    getTarefaById(req, res) {
      const { id } = req.params;
      const tarefa = tarefaService.findOne(id);
  
      if (!tarefa) {
        return res.status(404).send("register not found");
      }
      res.json(tarefa);
    }
  
    updateTarefa(req, res) {
      req.body.id = req.params.id;
      const updatedTarefa = tarefaService.update(new TarefaDTO(req.body));
      if (!updatedTarefa) return res.status(404).send("User not found");
      res.status(200).json(updatedTarefa);
    }
  
    deleteTarefa(req, res) {
      const { id } = req.params;
      const result = tarefaService.remove(id);
      if (!result) return res.status(404).send("User not found");
      res.status(204).send();
    }
  
    // validarLogin(req, res) {
    //   const { email, password } = req.body;
  
    //   if (!email || !password) {
    //     return res.status(400).json({ msg: "Email e senha são obrigatórios" });
    //   }
  
    //   const user = userService.findByEmail(email);
  
    //   if (!user || user.password !== password) {
    //     return res.status(401).json({ msg: "Credenciais inválidas" });
    //   }
  
    //   res.json({ msg: "Login bem-sucedido" });
    // }
  
    // recoverPassword(req, res) {
    //   const { email, password, secretQuestion } = req.body;
  
    //   if (!email || !secretQuestion) {
    //     return res.status(400).json({ msg: "Email e palavra secreta são obrigatórios" });
    //   }
  
    //   const user = userService.findByEmail(email);
  
    //   if (!user || user.secretQuestion !== secretQuestion) {
    //     return res.status(401).json({ msg: "Credenciais inválidas" });
    //   }
  
    //   user.password = password;
  
    //   res.json({ msg: "Senha alterada !!" });
    // }
  }

  module.exports = TarefaController;