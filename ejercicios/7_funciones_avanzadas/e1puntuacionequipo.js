function puntuacionFinalValidacion() {
    let formulario = document.getElementById("formulariopuntuacion");

    if (formulario.checkValidity()) {
        calcularPuntuacion();
    } else {
        document.getElementById("mensajeresultados").textContent = "Error en el formulario";
    }
}

function calcularPuntuacion() {
    // Recogemos los datos del formulario
    let partidosGanados = document.getElementById("partidosganados").valueAsNumber;
    let partidosPerdidos = document.getElementById("partidosperdidos").valueAsNumber;
    let partidosEmpatados = document.getElementById("partidosempatados").valueAsNumber;

    // Hacemos el cálculo de la puntuación final llamando a la función y guardando el resultado
    let puntuacionFinal = calcularPuntos(partidosGanados, partidosPerdidos, partidosEmpatados);

    // Mostrar el resultado
    document.getElementById("mensajeresultados").textContent = "Puntuación final = " + puntuacionFinal + " puntos"
    
    // Cambiar el color según los puntos obtenidos
    let color = colorResultado(puntuacionFinal);

    document.getElementById("mensajeresultados").style.color = color;
}

function calcularPuntos(partidosGanados, partidosPerdidos, partidosEmpatados) {
    let puntuacionGanados = partidosGanados * 3;
    let puntuacionEmpatados = partidosEmpatados * 1;
    let puntuacionPerdidos = partidosPerdidos * 0;

    let puntuacionFinal = puntuacionGanados + puntuacionEmpatados + puntuacionPerdidos;

    return puntuacionFinal;
}

function colorResultado(puntuacionFinal) {
    let color;
    let mensaje = document.getElementById("mensajeresultados");
    if (puntuacionFinal > 20) {
        color = "green";
    } else if (puntuacionFinal < 5) {
        color = "red";
    } else {
        color = "blue";
    }
    return color;
}