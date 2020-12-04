class Ticket {

    constructor() {

        this.id = 0;
        this.prefix = "";
        this.sufix = "";
        this.user = null;
        this.status = TICKET_STATUS.FREE;
    }
}


module.exports = Ticket;