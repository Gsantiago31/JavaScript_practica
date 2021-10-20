window.onload = function(){
    var numero1 = parseInt(prompt("Introduce el primer número ", 0));
    var numero2 = parseInt(prompt("Introduce el segundo número ", 0));
    while(isNaN(numero1)||isNaN(numero2)){
        var numero1 = parseInt(prompt("Introduce el primer número ", 0));
        var numero2 = parseInt(prompt("Introduce el segundo número ", 0));
    }
    if(numero1 == numero2){
        alert("Los números son iguales");
    } else if(numero1 > numero2){
        alert("El número mayor es el "+numero1)
    } else{
        alert("El número mayor es el "+numero2)
    }
}