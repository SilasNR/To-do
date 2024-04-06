// app.js
const express = require("express");
const bodyParser = require("body-parser");
const UserController = require("./usuario/usuario.controller.js");

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Para parsing de application/json

const userController = new UserController();

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
