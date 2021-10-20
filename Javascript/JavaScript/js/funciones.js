//funciones sin parámetro y sin retorno de valor
function mostrar(){
    document.write("Hola desde la función<br/>");
}
//código repetitivo
for(let i=0; i<10; i++){
mostrar();
}

//funciones con parámetros
function imprimir(nombre){
    document.write(`Hola, ${nombre}`);
}
imprimir("José<br/>");

//funciones que devuelven resultado
function mayor(val1,val2){
    let mayor = 0;
    if(val1>val2){
        mayor = val1;
    }else{
        mayor = val2;
    }
    return mayor;
}
document.write(mayor(4,56));
let numeroMayor = mayor(4,8);
document.write(`<br/>El número mayor es = ${numeroMayor}`);