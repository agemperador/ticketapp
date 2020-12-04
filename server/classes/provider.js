import User from './user';

class Provider extends User {

    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this.turneras = [];
        this.ticketeras = [];
        this.sucursales = [];


    }
    addTicketera(ticketera) {
        if (this.ticketeras.indexOf(ticketera) == -1) {
            this.ticketeras.push(ticketera);
            console.log(`La ticketera: ${ticketera.id} fue agregada a la lista`);

            write(ticketera, pathData)
        } else {
            console.log(`La ticketera: ${ticketera.id} ya existe, no puede ser agragada a la lista`);
        }
    }

    removeTicketera(ticketera) {
        var index = this.ticketeras.indexOf(ticketera);
        if (index > -1) {
            let count = 1;
            this.ticketeras.splice(index, count); //quita count elementos desde index
            console.log(`La ticketera: ${ticketera.id} fue removida de la lista`);
        } else {
            console.log(`La ticketera: ${ticketera.id} no esta en la lista, no puede ser removida`);
        }
    }

    getTicketeras() {
        return this.ticketeras;
    }

    getTicketerasById(id) {
        return this.ticketeras.filter(ticketera => {
            return ticketera.id == id
        });
    };

}

module.exports = Provider;