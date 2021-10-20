window.onload = function(){
    //por nombre de clase
    var parrafos = document.getElementsByClassName('parrafo');
    console.log(parrafos);
    parrafos[0].style.backgroundColor = 'yellow';
    //por id
    var titulo = document.getElementById('titulo');
    titulo.innerHTML = 'Otro título';
    var boton = document.getElementById('boton');
    boton.addEventListener('click',function(){
        console.log('Has pulsado el boton');
    });
    //por etiqueta
    var items = document.getElementsByTagName('li');
    console.log(items);
    items[1].innerHTML='Item 2 desde código';
    var elementos = Array.from(items);
    console.log(elementos);
    elementos.forEach(elemento => console.log(elemento));
}
