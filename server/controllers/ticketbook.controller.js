const app = require('../config/connection')

const { cortarTicket, crearTicketera } = require('../aplication/ticketbook')
const { getDB } = require('../db-handler.js')

//Models
const Ticketbook = require('../models/ticketbook.model');
const Sucursal = require('../models/sucursal.model')
const Ticket = require('../models/ticket.model')


farmacia = {
    name: "Melisa +",
    isActive: true,
}

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

/////////////////////////////////////
// Modifica el estado de un ticket //
/////////////////////////////////////
app.put('/ticket', async(req, res) => {

    //SI O SI para _id hace falta el ObjectId
    console.log(req.body)
    console.log('PUT')
    const idTicketbook = mongoose.Types.ObjectId(req.body.idTicketbook)
    const ticket = await cortarTicket(idTicketbook, res).catch(err => console.log(err))
    console.log(ticket)
    res.send(ticket)

})

/////////////////////////////////////
// Crea una ticketera de Sucursal  //
/////////////////////////////////////
app.post('/ticketbookDB/:idSucursal', (req, res) => {
    //SI O SI para _id hace falta el ObjectId
    const idSucursal = mongoose.Types.ObjectId(req.params.idSucursal)

    const ticketbook = crearTicketera(idSucursal, res)
    ticketbook.save()
})

/////////////////////////////////////
// Crea una ticketera de Sucursal  //
/////////////////////////////////////
app.get('/ticketbooks', (req, res) => {

    getDB('Ticketbooks', {}, data => {
        res.send({
            data,
        })

    });
});




app.post('/ticketbook/:id', function(req, res) {

    let id = req.params.id;

    ticketList = new Array

    //Genero N tickets
    const N = 100
    for (var i = 0; i < N; i++) {
        ticketList.push(
            new Ticket({
                idTicketbook: id,
                idTicket: i
            })
        )
    }

    //Creo una ticketera con id dado
    let ticketbook = new Ticketbook({
        idSucursal: id,
        isActive: true,
        tickets: ticketList
    });

    Sucursal.findByIdAndUpdate(id, { $push: { ticketbooks: [ticketbook] } }, { new: true }, (err, result) => {
        if (err) return res.send(err);

        res.json(result)
    })

    ticketbook.save((err, ticketbookDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

    });
});


module.exports = app;