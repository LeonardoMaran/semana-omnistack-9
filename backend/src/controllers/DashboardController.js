
const Spot = require('../models/Spot');

module.exports = {
    //metodo show esta listando 1 dashboard e nao uma listagem
    async show(req, res){
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });
        //esta buscando todos os spots que o campo user e igual ao campo user id
        //atraves do cabecalho.
        return res.json(spots);
    }
}