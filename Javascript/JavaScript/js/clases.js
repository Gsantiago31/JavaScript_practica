class Coche{
    //constructor (atributos)
    constructor(marca,motor,color){
        this.marca = marca;
        this.motor = motor;
        this._color = color;
        this._velocidad = 0;
    }
    // cambia valor o muestra atributos con estos métodos
    get velocidad(){
        return this._velocidad;
    }
    set cambiacolor(color){
        this._color = color;
    }
    get dameDatos(){
        return `El coche ${this.marca} es de color ${this._color}`;
    }
    //métodos (sin poner function)
    arrancar(){
        console.log("arrancado");
    }
    parar(){
        console.log("parado");
    }
    acelerar(){
        this._velocidad = this.velocidad + 10;
        console.log(`velocidad actual = ${this._velocidad}`);
    }
    frenar(){
        if(this._velocidad > 0){
            this._velocidad = this._velocidad - 10;
            console.log(`velocidad actual = ${this._velocidad}`);
        } else{
            this._velocidad = 0;
            console.log(`Velocidad actual = ${this._velocidad}`);
        }
    }
}
const miCoche = new Coche("seat","gasolina","rojo");
console.log(miCoche.dameDatos);
miCoche.arrancar();
miCoche.acelerar();
miCoche.acelerar();
console.log(`La velocidad actual es de ${miCoche.velocidad}`);
miCoche.frenar();
console.log(`La velocidad actual es de ${miCoche.velocidad}`);
miCoche.cambiacolor = "amarillo";
console.log(miCoche.dameDatos);
miCoche.parar();