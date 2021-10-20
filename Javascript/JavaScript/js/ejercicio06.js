//usuario contraseña
let usuario = prompt("Usuario ?");
let password = prompt("Contraseña ?");
while(usuario !== "admin" & password !== "1234"){
    console.log("Usuario o contraseña incorrectos");
    let usuario = prompt("Usuario ?");
    let paswword = prompt("Contraseña ?");
}
console.log(`Bienvenido, ${usuario}`);