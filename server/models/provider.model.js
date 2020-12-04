const mongoose = require('mongoose');



let Schema = mongoose.Schema;

let providerSchema = new Schema({

    dni:{
        type:Number,
        required:true
    },
    sucursales:{
        type:Array,
        required:false,
        default:[]
    },

})

module.exports = mongoose.model('Provider', providerSchema);