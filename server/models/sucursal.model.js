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
    }
});
/* "location": "en tu casa",
"atention": "todo el día",
 */

module.exports = mongoose.model('Sucursal', sucursalSchema, 'Sucursales');