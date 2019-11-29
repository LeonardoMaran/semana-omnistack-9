const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    //poderia serno formato date, mas tem que mexer em muita coisa
    approved: Boolean,
    //se a reserva foi aceita ou nao, nao vou colocar  nenhum default
    //porque ele vai iniciar como nulo

    //precisamos armazenar um relacionamento com o usuario
    //e com o spot, qual spot o usuario esta querendo criar uma reserva.
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);