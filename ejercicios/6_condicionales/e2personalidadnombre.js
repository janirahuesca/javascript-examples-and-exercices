function mostrarMensaje() {
    //creamos constantes con los mensajes
    const FRASE_MAS_VEINTE_LETRAS = "Tu nombre es largo y poderoso, ¡destinas a hacer grandes cosas!";
    const FRASE_CONTIENE_B = "Tu nombre contiene la letra 'B', lo que significa que tienes una personalidad fuerte y decidida.";
    const FRASE_CONTIENE_ANA = "¡Vaya! Tu nombre tiene 'Ana', lo que indica que eres una persona amable y cariñosa.";
    const FRASE_POR_DEFECTO = "Tienes un nombre único y especial, ¡reflejas una personalidad auténtica y diferente!";

    //guardamos el valor introducido por el usuario en la variable nombre
    let nombre = document.getElementById("nombre").value;

    const mensajeElement = document.getElementById("mensaje");

    // Validar que el campo no esté vacío
    if (nombre === "") {
        mensajeElement.textContent = "Por favor, introduce tu nombre.";
        mensajeElement.style.color = "red";
        return;
    }

    // Inicializar mensaje
    let mensaje = "";

    //comprobamos el nombre para asignarle el mensaje correspondiente según sus propiedades
    if (nombre.length > 20) {
        mensaje = FRASE_MAS_VEINTE_LETRAS;
    } else if (nombre.includes("B") || nombre.includes("b")) {
        mensaje = FRASE_CONTIENE_B;
    } else if (nombre.toLowerCase().includes("ana")) {
        mensaje = FRASE_CONTIENE_ANA;
    } else {
        mensaje = FRASE_POR_DEFECTO;
    }

    // Mostrar el mensaje en el párrafo
    mensajeElement.textContent = mensaje;
    mensajeElement.style.color = "black"; // Restaurar color en caso de errores previos
}