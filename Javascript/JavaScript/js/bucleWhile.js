//repeticion for
let tabla = parseInt(prompt("¿Qué tabla quieres que calcule?"));
document.write(`Empezamos con la tabla del ${tabla}<br/>`);
/* for (let i = 1; i <=10; i++){
    resultado = tabla * i;
    //Continue sirve para saltar la accion
    if(i==3){
        continue;
    }
    document.write(`${tabla}*${i}=${resultado}<br/>`)
} */
let i = 1;
//esto es una repetición con while
/*while(i<=10){
    resultado = tabla * i;
    document.write(`${tabla}*${i}=${resultado}<br/>`);
    i++;
}*/

//repetición de while
//Se ejecuta la primera acción luego ve la condición y si no es permitida actua como un brake.
do{
    resultado = tabla * i;
    document.write(`${tabla}*${i}=${resultado}<br/>`);
    i++;
}while(i<=10);