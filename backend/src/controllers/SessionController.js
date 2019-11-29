const User = require('../models/User');

//00.44.05
//Sessao, pode ser login, logout, qualquer coisa relacionada com sessao

//dentro do controller temos os seguntes metodos
//index, show, store, update, e destroi

//metodo index: esa demonstrando que agente vai retornar um metod de listagem de sessoes
//o show ele vai listar uma unica sessao
//o store e quando eu quero criar uma sessao
//o update e quando eu quero alterar uma sessao
//e o destroi e quando eu quero remover, deletar uma sessao

//estes ao os metodos disponives que eu posso ter em um controller
// posso criar mais metodos, posso, mas por padrao da comunidade eu nao posso criar mais metodos
// que este controller. Se voceprecisa criar mais metodos que este aqui provavelmente voce precia estar
//criando outro controller

//como eu quero cirar uma sessao eu vou utilizar o metodo store

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);

            //como a variavel  email tem o mesmo nomee da chave, ira ficar assim
            //metodo find busca o usuario pelo id
            //const user = await User.create({ email });


        }
    };

