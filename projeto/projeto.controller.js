const ProjetoDTO = require("./projeto.dto.js");
const ProjetoService = require("./projeto.service.js");
const { v4: uuidv4 } = require("uuid");

const projetoService = new ProjetoService();

class ProjetoController {
    createProjeto(req, res) {
      const id = uuidv4()
      req.body.id_projeto = id;
      req.body.owner_projeto = id;
      try {
        res.json(projetoService.create(new ProjetoDTO(req.body, true)));
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    }
  
    getAllProjetos(req, res) {
      const projetos = projetoService.findAll();
      res.json(projetos);
    }
  
    getProjetoById(req, res) {
      const { id } = req.params;
      const projeto = projetoService.findOne(id);
  
      if (!projeto) {
        return res.status(404).send("register not found");
      }
      res.json(projeto);
    }
  
    updateProjeto(req, res) {
      req.body.id = req.params.id;
      const updatedProjeto = projetoService.update(new ProjetoDTO(req.body));
      if (!updatedProjeto) return res.status(404).send("User not found");
      res.status(200).json(updatedProjeto);
    }
  
    deleteProjeto(req, res) {
      const { id } = req.params;
      const result = projetoService.remove(id);
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

  module.exports = ProjetoController;