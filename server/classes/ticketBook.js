class TicketBook {

    constructor(id, cantidad) {

        this.cantidad = cantidad;
        this.id = id;
        this.mnemonic = "";
        this.CreateData = "01-01-2020-00:00:00" // TODO usar data
        this.tickets = new Ticket(cantidad);
        this.cost;
    }
}
module.exports = TicketBook;