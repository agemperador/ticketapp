class Subsidiary {
    constructor(id) {
        this.name = "";
        this.description = "";
        this.id = 0;
        this.city = "";
        this.timeZone = -3;
        this.address = "";
        this.icon = null;
        this.queues = [];
        this.horario = new Horario();

    }
    addQueues(queue) {
        this.queues.push(queue);
    }
    removeQueue(id) {
        //TODO
    }
}

module.exports = Subsidiary;