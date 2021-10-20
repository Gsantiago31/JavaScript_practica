//console.log("Prueba de script");
$(document).ready(function(){
    console.log('Documento listo');
    //$("#contenido").html("contenido cambiado con jquery");
    $("h1").hide();
    $(".miParrafo").hide();
    $("#parrafo2").hide();
    console.log("Esperamos unos segundos y cambiamos título");
    tiempo = setTimeout("temporizador()",3000);
    console.log("Ya ha pasado el tiempo");
});
function temporizador(){
    $("#contenido").show();
    $("h1").show();
    $("h1").html("Título cambiado desde jquery");
    $(".miParrafo").show();
    $("#parrafo2").show();
}