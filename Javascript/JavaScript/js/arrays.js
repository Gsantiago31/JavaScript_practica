//crear array
const numeros = [];
console.log(numeros);
//crear con valores

const colores = ["rojo","amarillo","verde","marrón"];
//invertir orden
colores.reverse();
console.log(colores);
// crear con valores iguales
const seis = new Array(4).fill(6);
//añadir valor
console.log(seis);
seis.push(10);
seis.push(12);
//eliminar valor
seis.shift();
//mostrar 
for(let i = 0; i<seis.length; i++){
    console.log(seis[i]);
}
//muestra parte del array
console.log(seis.slice(1,3));
//recorrer array colores
for(color of colores){
    console.log(color);
}
//otra forma de recorrer array
//muestra el indice
for(i in colores){
    document.write(i);
    document.write(" : ")
    document.write(colores[i]);
    document.write("<br/>")
}