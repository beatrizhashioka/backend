const express = require('express');
const routes = express.Router();
const UsuariosControllers = require('./controllers/UsuariosControllers');


routes.post("/usuario", UsuariosControllers.store); // salva um documento na collection Usuarios
routes.get("/usuario/:email", UsuariosControllers.index); //retorna o elemento de acordo com o email passado

module.exports = routes;