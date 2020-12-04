const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let ticketbookSchema = new Schema({
    idSucursal: {
        type: String,
        required: false
    },
    // Estado activo o no de la ticketera
    isActive: {
        type: Boolean,
        default: false,
        required: false
    },
    tickets: {
        type: Array,
        ref: "tickets",
        required: false,
        default: []
    }

});


module.exports = mongoose.model('Ticketbook', ticketbookSchema, 'Ticketbooks');



/*     "status": "active",
    "timePurchase": "10/10/2020-5:20UTC",
    "timeStart": "10/10/2020-10:20UTC", 
    "tickets": [{
        "id": "1",
        "idQueue": "1",
        "owner": null,
        "historialStatus": [{
            "status": "available",
            "time": "10/10/2020-10:20UTC"
        }]
*/