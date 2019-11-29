const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    //metodo index e para retornar uma listagem de recursos, eu vou retornar uma lista de spots
    //
    async index(req, res){
        const { tech } = req.query;
        //req.query - serve para filtros como por exemplo categorias

        const spots = await Spot.find({ techs: tech });
        //listar tecnologia especifica no mongo
        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;
        //e mais uma forma de agente acessar um tipo de parametro, o header agente serve
        //para definir o context da  nossa requisicao, o header serve para agente enviar o
        //contexto da autenticacao, pode enviar no header tambem qual e o idioma do usuario,
        //e a resposta pode vir em portugues ou em ingles, e na autenticacao ele e sempre utilizado,


        const user = await User.findById(user_id);
        //se o usuario nao existe ele retorna um erro 400, que e o erro na requisicao do usuario.
        if (!user) {
            return res.status(400).json({ error: 'User does not exists'});
        }

        const spot = await Spot.create({
            //nao importa a sequencia
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            //no banco de dados ele espera o objeto techs como array,entao
            //vamos transformar em um array, o split corta a tringem varios pedacos
            //separadospor virgula, e para remover o espaco em branco eu vou utilizar o
            //map, vou percorrer e para  cada tecnologia eu  vou utilizar o trim,  trim
            // tira os espacos noma string.
            price
        })

        return res.json(spot)
    }
}