const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
//GET, POST, PUT, DELETE

// req.query = Acessar  query params(para filtros)
// Route params - Put editar + :id na url(para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao)

app.use(express.json());
app.use(routes);
//precisa aparecer depois do express.json sena ele nao funciona
//00.32.26

mongoose.connect('mongodb://localhost:27017/semstack9',
{ useUnifiedTopology: true, useNewUrlParser: true })

app.listen(3333);