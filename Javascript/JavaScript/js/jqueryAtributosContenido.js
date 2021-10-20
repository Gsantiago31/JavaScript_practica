//console.log("prueba desde script");
$(document).ready(function(){
    //retener valor atributo
    var valor = $("a").attr("href");
    console.log("valor inicial es "+valor);
    setTimeout(function(){
        console.log("Despues de 2 segundos cambiamos el href del enlace");
        //asignar el valor
        $("a").attr("href","http://www.google.es");
        var valor = $("a").attr("href");
        console.log("valor actual es "+valor);
    },2000);
    //eliminar atributo
    $("a").removeAttr("href");
    console.log("Atributo eliminado")
    var valor = $("a").attr("href");
        console.log("valor actual es "+valor);
    //obtener contenido con html
    var contenido = $("p").html();
    //alert(contenido);
    console.log(contenido);
    //obtener texto
    var solotexto = $("p").text();
    console.log(solotexto);
    //alert(solotexto);
    //cambiar el texto
    $("p").text("Texto cambiado desde código");
    // append prepend after before
    //Insertar - append
    $("#contenido").append("hola");
    $(".miParrafo").prepend("antes del parrafo");
    // añadir antes de - before
    $("#parrafo2").before("Título desde script");
    $("#parrafo2").after("<strong>Otro título desde script</strong><br/>");
    //Nuevo elemento
    var texto = $("<p></p>").text("Nuevo párrafo desde script");
    $("#parrafo2").after(texto);

});