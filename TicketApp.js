//var Enum = require('enum');




const guardar = require('./guardarDB.js');
const fs = require('fs');

pathData = './data/data.json'

const TICKET_STATUS = {
    ASIGNED: {
        WAITING: 0,
        CALLED: 1,
        ATTENDED: 2,
    },
    FREE: 3,
    ANULATED: 4,
    SUSPENDED: 5,
    FINALIZED: 6
};

const BUSINESS = {
    GENERIC: 0,
    FOOD: 1,
    DRUGSTORE: 2

};

const PRIORITY = {

    PREGNANT: 0,
    REDUCED_MOBILITY: 1,
    OLD_PERSON: 2
}








class controlService {

    static getUser(id) {
        console.log(`Clase o función de get usuario`);
    }
    static getTicketerasByProveedor(idProveedor) {
        console.log(`Ticketeras `);
    }
    static getTicket(id) {
        console.log(`Ticketera ${id}`);
    }

}

class controller {

    static handleTicketeras(method, id) {
        controlService[method](id);
    }
}

const write = (json, path) => {
    guardar.guardarDB(json, path)
        .then(mensaje => console.log(mensaje))
        .catch(err => console.log(err));
}



//