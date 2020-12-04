const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['PROVIDER_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required:false
    },
    age:{
        type:Number,
        required:false
    },
    email: {
        type: String,
        required: [true, 'El correo necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contrasena es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    provider:{
        type: Schema.ObjectId,
        ref: "provider",
        required:false,
    },
    tickets:{
        type: Array,
        ref: "tickets",
        required:false,
        default: []
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        required: false
    },

});


usuarioSchema.methods.toJSON = function() {
    let user = this;

    let userObject = user.toObject();

    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Usuarios', usuarioSchema, 'Usuarios');