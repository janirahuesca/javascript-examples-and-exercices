function puntuacionFinalValidacion() {
    // Obtenemos los valores del formulario
    let atencion = document.getElementById("atencion").value;
    let servicio = document.getElementById("servicio").value;
    let calidadprecio = document.getElementById("calidadprecio").value;

    // Validación manual
    if (!atencion || !servicio || !calidadprecio) {
        document.getElementById("mensajeresultado").textContent = 
            "Por favor, completa todas las preguntas antes de enviar.";
        return;
    }

    // Convertimos los valores a números y calculamos la puntuación
    calcularPuntuacion(Number(atencion), Number(servicio), Number(calidadprecio));
}

function calcularPuntuacion(atencion, servicio, calidadprecio) {
    // Hacemos el cálculo de la puntuación final
    let puntuacionFinal = calcularMedia(atencion, servicio, calidadprecio);

    // Definir mensaje según puntuación
    let opinionFinal = mensajeResultado(puntuacionFinal);

    // Mostrar el resultado
    document.getElementById("mensajeresultado").textContent = "Opinión final: " + opinionFinal;
}

function calcularMedia(pregunta1, pregunta2, pregunta3) {
    return (pregunta1 + pregunta2 + pregunta3) / 3;
}

function mensajeResultado(puntuacionFinal) {
    if (puntuacionFinal > 3) {
        return "Muy bueno";
    } else if (puntuacionFinal > 2) {
        return "Bueno";
    } else if (puntuacionFinal > 1) {
        return "Regular";
    } else {
        return "Malo";
    }
}
