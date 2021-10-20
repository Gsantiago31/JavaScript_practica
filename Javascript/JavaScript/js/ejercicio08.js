//
window.onload = function(){
    //console.log("Hola mundo");
    var mayor = 0;
    var menor = 9999;
    var numeros = [];
    //captura de datos
    for(var i = 0; i < 6;i++){
        numeros[i] = parseInt(prompt("Dime un número y te indicaré cuál es el mayor de los 6..."));
    }
    //recorremos array y comprobamos cuál es el mayor / menor
    for(var i=0; i<numeros.length;i++){
        if(numeros[i]>mayor){
            mayor = numeros[i];
        }
        if(numeros[i]<menor){
            menor = numeros[i];
        }
    }
    console.log("Hemos terminado de comprobar");
    console.log(`El número mayor es ${mayor}`);
    console.log(`El número menor es ${menor}`);
}