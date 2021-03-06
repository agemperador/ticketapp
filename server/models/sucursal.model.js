const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let sucursalSchema = new Schema({
    idSucursal: {
        type: String,
        required: true
    },
    // Estado activo o no de la ticketera
    idProveedor: {
        type: String,
        required: true
    },
    isOpen: {
        type: Boolean,
        required: false,
        default: true
    },
    ticketbooks: {
        type: Array,
        required: false,
        default: []
    },
    queues: {
        type: Array,
        required: false,
        default: [],
    },
    locationText: {
        type: String,
        required: false,
        default: ''
    },
    lat: {
        type: Number,
        required: false
    },
    lon: {
        type: Number,
        required: false
    }

});
/* "location": "en tu casa",
"atention": "todo el día",
 */

module.exports = mongoose.model('Sucursal', sucursalSchema, 'Sucursales');