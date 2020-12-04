const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const [validStatus, validStatusDic] = require('../config/config')

let Schema = mongoose.Schema;



let ticketSchema = new Schema({
    idTicketbook: {
        type: String,
        required: false
    },
    ticketStatus: {
        type: String,
        default: validStatusDic['AVAILABLE'],
        enum: validStatus
    }
});


module.exports = mongoose.model('Ticket', ticketSchema, 'Ticket');