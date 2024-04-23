let pantalla;
let botones = [];
let operaciones = [];
let operacion = "";
let valor;
let valor1, valor2;

window.onload = cargarElementos;

function cargarElementos() {
    operaciones[0] = document.getElementById("btnLimpiar");
    operaciones[1] = document.getElementById("btnPorcentaje"); 
    operaciones[2] = document.getElementById("btnEliminar"); 
    operaciones[3] = document.getElementById("btnDividir"); 
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

function realizarOperacion() {
    let resultado = 0;
    let bandera = false;

    if (operacion == "sumar"){

        resultado = (valor1 + valor2);
        bandera = true;
    }
    else if (operacion == "restar"){

        resultado = (valor1 - valor2);
        bandera = true;
    }
    else if (operacion == "multiplicar"){

        resultado = (valor1 * valor2);
        bandera = true;
    }
    else if (operacion == "dividir"){

        if (valor2 != 0) {
            resultado = (valor1 / valor2);
            bandera = true;
        }
        else {
            alert("Error! No se puede dividir por cero")
            reiniciarPantalla();
        }
    }

    if (bandera) {
        pantalla.value = resultado;
        operacion = "";
    }
}

function presionarTeclaOperacion(event){

    switch(event.target.id) {

        case "btnLimpiar": 
            reiniciarPantalla();
            pantalla.value = "";
            break;
        case "btnSumar":
            valor1 = parseFloat(pantalla.value);
            reiniciarPantalla();
            operacion = "sumar"
            break;
        case "btnRestar":
            valor1 = parseFloat(pantalla.value);
            reiniciarPantalla();
            operacion = "restar"
            break;
        case "btnMultiplicar":
            valor1 = parseFloat(pantalla.value);
            reiniciarPantalla();
            operacion = "multiplicar"
            break;
        case "btnDividir":
            valor1 = parseFloat(pantalla.value);
            reiniciarPantalla();
            operacion = "dividir"
            break;
        case "btnIgual":
            valor2 = parseFloat(pantalla.value);
            reiniciarPantalla();
            realizarOperacion();
            break;
    
    }

}