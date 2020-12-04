class Person {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
        this.email = "";
    }

    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getJson() {
        const obj = {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            email: this.email
        }
        return obj;
    }
}

module.exports = { Person };