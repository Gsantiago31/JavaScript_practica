//console.log("prueba desde script");
$(document).ready(function(){
/*     //animaciones
    $("p").click(function(){
        //hide y show fadeIn fadeOut fadeToogle (fade es como desvanecer)
        //en el parametro se ponen los segundos de la animacion
        //deslizamiento slideUp slideDown slideToogle
        $("div").slideUp(1000);
    }); */
    $("button").click(function(){
        //toogle si está oculto muestra, si se muestra lo oculta
        //$("div").slideToggle(1000); 
        $("p").animate({
            width: "-=50px", //-= es para quitar cada vez que da click
            height: "+=5px"  //+= es para quitar cada vez que da click
        },1500);
    });
    //una a una según orden
    var parrafo = $("p");
    parrafo.animate({opacity: 1});
    parrafo.animate({height: "+=100px",width: "+=50px",top: "-=30px"},1000);
    parrafo.animate({opacity: 0.5});
    parrafo.animate({height: "-=100px",width: "-=50px",top: "+=30px"},500);
});