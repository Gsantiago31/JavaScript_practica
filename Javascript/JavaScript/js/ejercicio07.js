//usuario contraseña con 3 intentos
window.onload = function(){
let usuario = prompt("Usuario ?");
let password = prompt("Contraseña ?");
let intentos = 0;
while(usuario !== "admin" & password !== "1234"){
    if(intentos > 3){
        console.log("Lo has intentado demasiadas veces!!")
        break;
    }
    console.log("Usuario o contraseña incorrectos");
    let usuario = prompt("Usuario ?");
    let paswword = prompt("Contraseña ?");
    intentos++;
    console.log(`Llevas ${intentos} intentos`);
}
if(intentos < 3){
    console.log(`Bienvenido, ${usuario}`);
}else{
    console.log("No has entrado al sistema");
}
}