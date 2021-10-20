//suma entre dos valores dados
let numero1 = parseInt(prompt("Inserte el primer número"));
let numero2 = parseInt(prompt("Inserta el segundo número"));
let suma = 0;
for(numero1; numero1 <= numero2; numero1++){
    suma = suma + numero1;
};
console.log(`La suma de todos los números del intervalo dado es = ${suma}`);