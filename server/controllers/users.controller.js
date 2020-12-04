const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const Usuario = require('../models/user.model');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

pepe = {
    name: "Melisa",
    lastname: "Kohan",
    age: "28",
    mail: "mlk1@gmail.com",
    password: "hash",
}

app.post('/usuario', function(req, res) {

    /*     let body = req.body;
     */
    let usuario = new Usuario({
        email: pepe.mail,
        password: pepe.password,
        /*         age: pepe.age,
                name: pepe.name,
                lastname:pepe.lastname */
    });

    console.log(usuario);

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });
});


module.exports = app;