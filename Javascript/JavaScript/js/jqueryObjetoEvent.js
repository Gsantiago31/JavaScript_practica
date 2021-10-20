//console.log("prueba desde script");
$(document).ready(function(){
    //pageX pageY(posición xy ratón) type(tipoevento) wich(tecla pulsada) data(dato que se pasó) target(elemento que inicia evento) preventDefault(Preiene acción por defecto) stopPropagation(impide que se active el evento sobre otros elementos)
    $("a").click(function(event){
        console.log(event.pageX);
        console.log(event.pageY);
        console.log(event.which);
        console.log(event.target);
        event.preventDefault();
        console.log("No se abrirá el enlace");
    });
    //indicar tecla pulsada
    $("input").keydown(function(event){
        //alert("Has pulsado"+ event.which);
        console.log("Has pulsado"+ event.which);
    });
    //ejecutar eventos sin que lo realice el usuario
    $("#boton").click(function(){
        alert("Has pulsado el boton!!!")
    });
    $("#boton").trigger("click");
});