//usuario finaliza
window.onload = function(){
    //console.log("Hola mundo");
    var mayor = 0;
    var menor = 9999;
    var numeros = [];
    var usuario = "";
    do{
        usuario = prompt("Dime un número o escribe 'fin' para terminar")
        if(usuario!="fin"){
            usuario = parseInt(usuario);
            numeros.push(usuario);
        }
    }while(usuario!="fin");

    //recorremos array y comprobamos cuál es el mayor / menor
    for(var i=0; i<numeros.length;i++){
        if(numeros[i]>mayor){
            mayor = numeros[i];
        }
        if(numeros[i]<menor){
            menor = numeros[i];
        }
    }
    if(numeros.length>2){
        console.log("Hemos terminado de comprobar");
        console.log(`El número mayor es ${mayor}`);
        console.log(`El número menor es ${menor}`);
    } else{
        console.log("No hay números suficientes para comprobar mayor y menor");
    }
    
}