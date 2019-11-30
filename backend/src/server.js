const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

const routes = require('./routes.js')

//GET, POST, PUT, DELETE

// req.query = Acessar  query params(para filtros)
// Route params - Put editar + :id na url(para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao)






//precisa aparecer depois do express.json sena ele nao funciona
//00.32.26

mongoose.connect('mongodb://localhost:27017/semstack9',
{ useUnifiedTopology: true, useNewUrlParser: true })

const app = express()
const server = http.Server(app)
const io = socketio(server)

const connectedUsers = {}

io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`)
    const { user_id } = socket.handshake.query

    connectedUsers[user_id] = socket.id
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers
    return next()
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

server.listen(3333)