let pantalla;
let botones;

window.onload = function() {
    pantalla = document.getElementById("output-box");
    botones = document.getElementsByClassName("btn");
    agregarEventos(botones);
    pantalla.value = "";
}

function agregarEventos(botones){
    for (let i=0; i<botones.length; i++) {
        botones[i].addEventListener("click", mostrarValorPantalla)
    }
}

function mostrarValorPantalla() {
    let valorBoton = this.innerHTML;

    if (pantalla.value.length<10) {
        pantalla.value += valorBoton;
    }
}