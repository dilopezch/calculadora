let pantalla;
let botones = [];
let operaciones = [];
let valor;
let valor1, valor2;

window.onload = cargarElementos;

function cargarElementos() {
    operaciones[0] = document.getElementById("btnLimpiar");
    operaciones[1] = document.getElementById("btnPorcentaje"); 
    operaciones[2] = document.getElementById("btnEliminar"); 
    operaciones[3] = document.getElementById("btnDivision"); 
    operaciones[4] = document.getElementById("btnMultiplicar"); 
    operaciones[5] = document.getElementById("btnRestar"); 
    operaciones[6] = document.getElementById("btnSumar"); 
    operaciones[7] = document.getElementById("btnIgual"); 

    pantalla = document.getElementById("output-box");
    botones = document.getElementsByClassName("btn-numbers");
    agregarEventos(botones);
    pantalla.value = "";
}

function agregarEventos(){
    for (let i=0; i<botones.length; i++) {
        botones[i].addEventListener("click", mostrarNumeroPantalla)
    }

    for (let i=0; i<operaciones.length; i++){
        operaciones[i].addEventListener("click", presionarTeclaOperacion)
    }
}

function mostrarNumeroPantalla() {
    let valorBoton = this.innerHTML;

    if (pantalla.value.length<10) {
        pantalla.value += valorBoton;
    }
}

function reiniciarPantalla(){
    valor = ""; 
    pantalla.value = "";
}

function presionarTeclaOperacion(event){
    switch(event.target.id) {
        case "btnLimpiar": 
            reiniciarPantalla();
            pantalla.value = "";
            break;
    }

}