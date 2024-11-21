function adivinarNumeroValidar() {
    // Obtener el formulario
    let formulario = document.getElementById("formularioadivinanumero");

    // Validar el formulario
    if (formulario.checkValidity()) {
        adivinarNumero();
    } else {
        document.getElementById("mensaje").textContent = "Error en el formulario.";
    }
}

function adivinarNumero() {
    // Creamos una constante con el numero ganador
    const NUM_GANADOR = 4;

    // Guardar el valor seleccionado por el usuario en la variable número elegido
    let numeroElegido = parseInt(document.getElementById("numero").value);

    let mensaje = "";

    // Comprobar si el númerp elegido es igual al ganador o no
    if(numeroElegido === NUM_GANADOR) {
        mensaje = "¡Felicidades! Has adivinado el número.";
    } else {
        mensaje= "¡Lo siento!, has perdido, no has adivinado el número!";
    }

    document.getElementById("mensaje").textContent = mensaje;

    document.getElementById("formularioadivinanumero").style.display = "none";
}