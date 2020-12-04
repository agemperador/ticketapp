const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const _ = require('underscore');


const Provider = require('../models/provider.model')


pepeprov={
    dni: 30000000,
}


app.post('/proveedor', function(req, res) {

    /*     let body = req.body;
     */
        
        
        
        new Provider({
            email: pepe.mail,
            password: pepe.password,
            age: pepe.age,
            name: pepe.name,
            lastname:pepe.lastname
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

