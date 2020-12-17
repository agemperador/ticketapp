const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const queueStatus = [0, 1]
const queueType = [0, 1, 2]

let queueSchema = new Schema({
    idSucursal: {
        type: String,
        required: true
    },
    idTicketbook: {
        type: String,
        required: false
    },
    idQueue: {
        type: String,
        unique: true,
    },
    status: {
        type: Number,
        required: false,
        default: queueStatus[0],
        enum: queueStatus
    },
    tickets: {
        type: Array,
        required: false,
        default: []
    },
    name: {
        type: String,
        required: false,
        default: 'Queue'
    },
    type: {
        type: Number,
        required: false,
        default: 0,
        enum: queueType
    }
});


module.exports = mongoose.model('Queue', queueSchema, 'Queue');