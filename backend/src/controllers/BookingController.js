const Booking = require('../models/Booking');

module.exports = {
    //rota store - criacao de uma nova reserva
    async store(req, res) {
        //buscar o usuario logado que ta fazendo a reserva dentro do cabecalho
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await booking.populate('spot').populate('user').execPopulate();

        const ownerSocket = req.connectedUsers[booking.spot.user]

        if (ownerSocket) {
            req.io.to(ownerSocket).emit('booking_request', booking);
        }

        return res.json(booking);
    }
};
//video 2- 21.49