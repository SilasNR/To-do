const ProjetoDTO = require("./projeto.dto.js");
const ProjetoService = require("./projeto.service.js");

const projetoService = new ProjetoService();

class ProjetoController {
    createUser(req, res) {
      req.body.id = uuidv4();
      try {
        res.json(userService.create(new UserDTO(req.body, true)));
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    }
  
    getAllUsers(req, res) {
      const projetos = projetoService.findAll();
      res.json(projetos);
    }
  
    getUserById(req, res) {
      const { id } = req.params;
      const user = userService.findOne(id);
  
      if (!user) {
        return res.status(404).send("register not found");
      }
      res.json(user);
    }
  
    updateUser(req, res) {
      req.body.id = req.params.id;
      const updatedUser = userService.update(new UserDTO(req.body));
      if (!updatedUser) return res.status(404).send("User not found");
      res.status(200).json(updatedUser);
    }
  
    deleteUser(req, res) {
      const { id } = req.params;
      const result = userService.remove(id);
      if (!result) return res.status(404).send("User not found");
      res.status(204).send();
    }
  
    validarLogin(req, res) {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ msg: "Email e senha são obrigatórios" });
      }
  
      const user = userService.findByEmail(email);
  
      if (!user || user.password !== password) {
        return res.status(401).json({ msg: "Credenciais inválidas" });
      }
  
      res.json({ msg: "Login bem-sucedido" });
    }
  
    recoverPassword(req, res) {
      const { email, password, secretQuestion } = req.body;
  
      if (!email || !secretQuestion) {
        return res.status(400).json({ msg: "Email e palavra secreta são obrigatórios" });
      }
  
      const user = userService.findByEmail(email);
  
      if (!user || user.secretQuestion !== secretQuestion) {
        return res.status(401).json({ msg: "Credenciais inválidas" });
      }
  
      user.password = password;
  
      res.json({ msg: "Senha alterada !!" });
    }
  }

  module.exports = ProjetoController;