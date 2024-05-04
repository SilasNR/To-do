// app.js
const express = require("express");
const bodyParser = require("body-parser");
const UserController = require("./usuario/usuario.controller.js");
const ProjetoController = require("./projeto/projeto.controller.js");

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Para parsing de application/json

const userController = new UserController();
const projetoController = new ProjetoController();

// Rotas para funcionalidade do CRUD de Usuário
app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.get("/users/:id", (req, res) => userController.getUserById(req, res));
app.put("/users/:id", (req, res) => userController.updateUser(req, res));
app.delete("/users/:id", (req, res) => userController.deleteUser(req, res));

// Rotas para funcionalidade de autenticação do Usuário
app.post("/users/login", (req, res) => userController.validarLogin(req, res));

// Rota para recuperação de senha do Usuáro
app.post("/users/recover", (req, res) => userController.recoverPassword(req, res));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Rotas para funcionalidade 2 do CRUD de Projetos
app.post("/projects", (req, res) => projetoController.createProjeto(req, res));
app.get("/projects", (req, res) => projetoController.getAllProjetos(req, res));
app.get("/projects/:id", (req, res) => projetoController.getProjetoById(req, res));
app.put("/projects/:id", (req, res) => projetoController.updateProjeto(req, res));
app.delete("/projects/:id", (req, res) => projetoController.deleteProjeto(req, res));
