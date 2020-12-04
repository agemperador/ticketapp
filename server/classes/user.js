import Person from './person';

class User extends Person {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this.id = null;
        this.tickets = [];
        this.account = "";
        this.pass = "";
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    mostrarNombreApellido() {
        console.log(`${this.getId()}: ${this.getNombre()} ${this.getApellido()} ${this.getEdad()}`);
    }


    solicitarTickets(idTicketera) {;
        //return controller.handleReq('getTicketeraById', idTicketera);
    };

}

module.exports = User;