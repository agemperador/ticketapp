const Ticket = require('../models/ticket.model');
const Ticketbook = require('../models/ticketbook.model');
const [validStatus, validStatusDic] = require('../config/config')


const cortarTicket = async(idTicketbook) => {

    const ticketbookDB = await Ticketbook.findById(idTicketbook, (err, ticketbookDB) => {
            if (err) return err
            return ticketbookDB
        })
        //////////////////////////////   busca el indice del primero available /////////////////////
        //////////////////////////////   modifica el ticket en ese indice      /////////////////////
    const ixTicket = await ticketbookDB.tickets.findIndex(ticket => ticket.ticketStatus == validStatusDic['AVAILABLE'])
    if (ixTicket == -1) {
        console.log('No quedan tickets disponibles')
        return null
    }
    const ticketsModified = ticketbookDB.tickets

    ticketsModified[ixTicket].ticketStatus = validStatusDic['WAITING']

    const ticketCortado = ticketsModified[ixTicket]
        //////////////////////////  Modifica los tickets de la ticketera ///////////////////////////
    const ticketbook = await Ticketbook.findByIdAndUpdate(idTicketbook, {
        tickets: ticketsModified
    }, { new: true });

    return ticketCortado;
}

////////////////////                    TO DO                //////////////////////////////////////// 
////////////////////   Aviso cuando quedan pocos tickets     ////////////////////////////////////////


const crearTicketera = async(idSucursal, res) => {

    ticketList = new Array

    //Genero N tickets
    const N = 100
    for (var i = 0; i < N; i++) {
        ticketList.push(
            new Ticket({
                idTicket: i
            })
        )
    }

    //Creo una ticketera con id dado
    let ticketbook = new Ticketbook({
        idSucursal: idSucursal,
        isActive: true,
        tickets: ticketList
    });

    console.log(ticketbook)

    return ticketbook

}

module.exports = { cortarTicket, crearTicketera };