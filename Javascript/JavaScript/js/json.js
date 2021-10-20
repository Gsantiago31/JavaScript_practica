//crear registro
const alumno = {
    nombre: "Jose",
    nota: 6
};
console.log(alumno);
alumno["nota"]=5;
console.log(alumno)
console.log(alumno["nombre"]);
console.log(alumno.nota);

//estructura compleja json
const alumnos = [
    {
        nombre: "José",
        nota: 6
    },
    {
        nombre: "María",
        nota: 10
    },
    {
        nombre: "Juan",
        nota: 10
    }
];
//agregar alumno .push a un array o json
let alumnaNueva = {
    nombre: "Julia",
    nota: 9
};
alumnos.push(alumnaNueva);
//recorrer json
for (let i = 0; i<alumnos.length;i++){
    console.log(`${alumnos[i].nombre}`);
    document.write(`${alumnos[i].nombre}<br/>`)
}
console.log(alumnos);
alumnos.splice(1,1);
console.log(alumnos);