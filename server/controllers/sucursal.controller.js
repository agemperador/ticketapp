const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const cors = require('cors')
const mongoose = require('mongoose')

const pathData = 'C:/Users/Agustin/Desktop/Ticketapp/ticketapp/data/data.json'


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const Sucursal = require('../models/sucursal.model')

const Queue = require('../models/queue.model')


app.post('/queue', (req, res) => {

    const data = req.body.data

    const idSucursal = data.idSucursal
    const idTicketbook = data.idTicketbook

    let queue = new Queue({
        idSucursal: idSucursal,
        idQueue: `${idSucursal}cola1`,
        idTicketbook
    })

    queue.save((err, queueDB) => {
        if (err) res.send(err)
        res.send(queueDB)
    })
})


app.post('/sucursal', (req, res) => {

    const data = req.body.data

    console.log(data)

    const idSucursal = data.idSucursal
    const idProveedor = data.idProveedor


    let queue1 = new Queue({
        idSucursal: idSucursal,
        tag: 'cola1'
    })
    let queue2 = new Queue({
        idSucursal: idSucursal,
        tag: 'cola2'
    })

    const queueList = new Array

    queueList.push(queue1, queue2)


    let sucursal = new Sucursal({
        idSucursal: idSucursal,
        idProveedor: idProveedor,
        queues: queueList
    })



    sucursal.save((err, sucursalDB) => {
        if (err) console.log(err)
        res.send(sucursalDB)
    })
})

app.put('/sucursales', (req, res) => {

    console.log('Update');
});


app.get('/sucursales', (req, res) => {

    getDB('Sucursales', {}, data => {
        res.send({
            data,
        })

    });
});

app.get('/sucursales/:id', (req, res) => {

    const id = req.params.id

    getDB('Sucursales', { 'sucursal.id': id }, data => {

        res.send({
            data,
        })
    });
});


module.exports = app;