const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//router: roteador do express, responsavel peelas rotas

routes.post('/users', SessionController.store);

//50.39

module.exports = routes;