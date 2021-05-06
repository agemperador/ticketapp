const express = require('express');
let app = express();

const { guardarDB } = require('../../guardarDB.js');
const fs = require('fs');

const { getDB, saveDB } = require('../db-handler')

const MongoClient = require('mongodb').MongoClient;


pathData = 'C:/Users/Agustin/Desktop/Ticketapp/ticketapp/data/data.json'


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



app.get('/ticketbooksSucursal/:idSucursal', (req, res) => {

    const id = req.params.idSucursal

    getDB('Sucursales', { 'sucursal.id': id }, data => {
        const ticketbooks = data.map(d => {
            return d.sucursal.ticketbooks
        })

        res.send({
            ticketbooks,
        })

    });
});


app.get('/getTicket/:idTicketbook', (req, res) => {

    const id = req.params.idTicketbook

    getDB('Sucursales', { 'sucursal.ticketbooks.id': id }, data => {
        const tickets = data.map(d => {
            const ticket = d.sucursal.ticketbooks.map(t => {
                return t.tickets
            })
            return ticket
        })
        res.send({
            tickets,
        })
    });
});



app.put('/sucursales', (req, res) => {

    console.log('Update');
});


module.exports = app;




/*     res.send('Hola Mundo!');

    pepe = new User('Pepe', 'Grillo', 20);
    pepe.setId('u1');
    pepe.mostrarNombreApellido();


    leo = new Provider("Leo", "Handsztok", 48);
    leo.setId('u2');
    leo.mostrarNombreApellido();


    fran = new Provider("Fran", "Handsztok", 19);
    fran.setId('u2');
    fran.mostrarNombreApellido();
    fran.setEdad(20);
    fran.mostrarNombreApellido();

    pepe.solicitarTickets();


    t1 = new TicketBook(1, 1000);
    t2 = new TicketBook(2, 100);
    t3 = new TicketBook(3, 200);
    t4 = new TicketBook(5, 50);


    leo.addTicketera(t1);
    leo.addTicketera(t2);
    leo.addTicketera(t3);
    leo.addTicketera(t3); //intento agregar una ticketera existente;
    leo.removeTicketera(t1); //remuevo una ticketera;



    fran.addTicketera(t1);
    fran.addTicketera(t4);


    //tsLeo = leo.getTicketeras();
    //console.log(tsLeo);

    //tsFran = fran.getTicketeras();
    //console.log(tsFran);

    console.log(fran.getTicketerasById(5)); */