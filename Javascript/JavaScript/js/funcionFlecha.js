//funcion clásica
function suma(num1,num2){
    return num1+num2;
}
console.log(suma(25,25));

//funcion flecha
let suma2 = (num1,num2)=>num1+num2;
console.log(suma2(30,70));

//funcion flecha con un parámetro
const cuadrado = x => x*x;
console.log(`El cuadrado de 4 es ${cuadrado(4)}`);

//función con cuerpo
const tipo = numero =>{
    if (numero>0){
        return "Es positivo";
    } else if (numero<0){
        return "Es negativo";
    } else {
        return "Es cero";
    }
}
console.log(tipo(1450));