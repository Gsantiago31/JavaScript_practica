window.onload = function(){
    console.log('Alto ='+window.innerHeight);
    console.log('Alto ='+window.innerWidth);
        //ventana pantalla
        console.log('Alto ='+screen.height);
        console.log('Ancho ='+screen.width);
    //url actual
    console.log(window.location);
    //redirigir
    /* window.location.href = 'https://ticoticotaa.es';
    console.log(window.location); */
    //llevar a web
    function irweb(url){
        window.location.href = url;
    }
    function abrirVentana(url){
        window.open(url,'','width=400,height=250');
    }
    //irweb('https://www.google.es')
    abrirVentana('https://ticoticotaa.es');
}