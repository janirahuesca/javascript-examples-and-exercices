function mostrarMensaje() {
    //creamos constantes con los mensajes
    const FRASE_ROJO = "El rojo es el color de la pasión y la energía. ¡Hoy será un día lleno de acción y emoción! No temas a los desafíos, saldrás victorioso.";
    const FRASE_VERDE = "El verde representa la esperanza y el crecimiento. Algo nuevo y positivo está por florecer en tu vida. Confía en los pequeños cambios que te acercan a tus metas.";
    const FRASE_AZUL = "El azul simboliza la calma y la serenidad. Hoy estarás rodeado de tranquilidad y equilibrio. Aprovecha este momento para reflexionar y renovar tu energía.";
    const FRASE_AMARILLO = "El amarillo es el color de la felicidad y el optimismo. ¡Prepárate para un día lleno de alegría y buenas noticias! Alguien cercano te sorprenderá de forma positiva.";
    const FRASE_MORADO = "El morado evoca la sabiduría y la creatividad. Hoy te sentirás inspirado y lleno de ideas. Es el momento ideal para dejar volar tu imaginación y tomar decisiones importantes.";

    //guardamos el valor seleccionado por el usuario en la variable color elegido
    let colorElegido = document.getElementById("color").value;
    let mensaje = "";

    //comprobamos el color elegido para asignarle el mensaje correspondiente según el color
    if (colorElegido === "red") {
        mensaje = FRASE_ROJO;
    } else if (colorElegido === "green") {
        mensaje = FRASE_VERDE;
    } else if (colorElegido === "blue") {
        mensaje = FRASE_AZUL;
    } else if (colorElegido === "yellow") {
        mensaje = FRASE_AMARILLO;
    } else {
        mensaje = FRASE_MORADO;
    }

    // Asignamos el mensaje al elemento y cambiamos su color de texto
    let elementoMensaje = document.getElementById("mensaje");
    elementoMensaje.textContent = mensaje;
    elementoMensaje.style.color = colorElegido; // Cambia el color de texto según el valor seleccionado
}