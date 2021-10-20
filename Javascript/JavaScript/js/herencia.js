class Persona{
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    info(){
        return `me llamo ${this._nombre} y tengo ${this._edad} años`;
    }
    dormir(){
        console.log("Estoy durmiendo")
    }
    comer(){
        console.log("Estoy comiendo")
    }
    despertar(){
        console.log("Ya estoy despierto")
    }
}
class Trabajador extends Persona{
    constructor(nombre,edad){
        super(nombre,edad);
        this.trabaja = "Sí";
    }
    get salario(){
        return this._salario;
    }
    set cambiaSalario(salario){
        this._salario = salario;
    }
    info(){
        return `me llamo ${this._nombre}, tengo ${this._edad} años y ${this.trabaja} si estoy trabajando.`;
    }
}
const persona1 = new Persona("Santiago",21)
console.log(persona1.info);
persona1.despertar();
persona1.comer();
persona1.dormir();
const trabajador1 = new Trabajador("M mar", 46);
console.log(trabajador1.info());
trabajador1.cambiaSalario = 1200000;
console.log(trabajador1.salario);
