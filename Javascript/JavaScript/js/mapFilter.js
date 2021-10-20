const numeros = [2,3,4,2,1,5,6,7,8,2,9,10,34,21,54];
numeros.forEach(function(numero){
    console.log(numero*2);
});

//aplicar función para cada elemento del array - MAP
const duplica = numeros.map(function(numero){
    return numero * 2;
});
console.log("Usando MAP");
console.log(duplica);

//extraer elementos que cumplen una condición - FILTER
const mayores = numeros.filter(function(numero){
    return numero > 9;
});
console.log("Usando FILTER");
console.log(mayores);

//devolver índice del valor coincidente
const indice = numeros.findIndex(function(valor){
    return valor === 7;
});
console.log("Coincide el 7 en el Indice...");
console.log(indice);

//devolver elemento coincidente
const valor = numero.findIndex(function(numero){
    return numero === 5; 
})
console.log("Coincide el valor 5");
console.log(valor);