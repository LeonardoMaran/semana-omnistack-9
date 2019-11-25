const express = require('express');

const routes = express.Router();
//router: roteador do express, responsavel peelas rotas

routes.post('/', (req, res)=>{
    return res.json(req.body);
});

module.exports = routes;