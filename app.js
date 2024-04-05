// app.js
const express = require("express");
const bodyParser = require("body-parser");
const UsuarioController = require("./usuario/usuario.controller.js");
const PerfilController = require("./perfil/perfil.controller.js")

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Para parsing de application/json

const usuarioController = new UsuarioController();

// Rotas para funcionalidade do CRUD de Usuário
app.post("/users", (req, res) => usuarioController.createUser(req, res));
app.get("/users", (req, res) => usuarioController.getAllUsers(req, res));
app.get("/users/:id", (req, res) => usuarioController.getUserById(req, res));
app.put("/users/:id", (req, res) => usuarioController.updateUser(req, res));
app.delete("/users/:id", (req, res) => usuarioController.deleteUser(req, res));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
