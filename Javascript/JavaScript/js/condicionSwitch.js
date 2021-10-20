//condicion switch
console.log("Indica el número de opción\n");
console.log("1. Cargar\n");
console.log("2. Imprimir\n");
console.log("3. Salir\n");
opcion =parseInt(pormpt("Dame una opción"));
switch(opcion){
    case 1:
        document.write("Cargando...");
        break;
    case 2:
        document.write("Imprimiendo...");
        break;
    case 3:
        document.write("Saliendo...");
        break;
    default:
        document.write("\nSelección no válida, introduzca una opción válida.")
        break;
}