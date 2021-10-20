//positivo negativo
let numero = parseInt(prompt("Dime un número y te indico si es positivo o no ..."));
if(numero > 0){
    console.log(`El número ${numero} es positivo`);
} else if(numero < 0){
    console.log(`El número ${numero} es negativo`);
} else{
    console.log("El número es igual 0");
}