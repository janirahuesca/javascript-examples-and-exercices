function calcularPrecioValidar() {
    // Obtener el formulario
    let formulario = document.getElementById("formulariohotel");

    // Validar el formulario
    if (formulario.checkValidity()) {
        calcularPrecio();
    } else {
        document.getElementById("mensaje").textContent = "Por favor, completa todos los campos obligatorios.";
    }
}

function calcularPrecio() {
    // Creamos las constantes con el precio según tipo de habitación
    const HABITACION_FAMILIAR = 100;
    const HABITACION_DOBLE = 80;
    const HABITACION_INDIVIDUAL = 50;

    // Creamos una constante con el descuento a aplicar
    const PORCENTAJE_DESCUENTO = 20;

    // Creamos una constante con el número de noches a partir de las cuales se aplicará descuento
    const NUM_NOCHES_LINDAR_DESCUENTO = 5;

    // Guardar el valor seleccionado por el usuario en la variable tipo habitacion
    let tipoHabitacion = document.getElementById("tipohabitacion").value;

    // Guardar el valor elegido por el usuario en la variable número de noches
    let numeroNoches = parseInt(document.getElementById("numnoches").value);

    // Calcular precio según tipo de habitación
    let precioTotal = 0;

    if (tipoHabitacion === "familiar") {
        precioTotal = HABITACION_FAMILIAR * numeroNoches;
    } else if (tipoHabitacion === "doble") {
        precioTotal = HABITACION_DOBLE * numeroNoches;
    } else {
        precioTotal = HABITACION_INDIVIDUAL * numeroNoches;
    }

    // Calcular precio con descuento
    let descuentoAAplicar = (precioTotal * PORCENTAJE_DESCUENTO) / 100;
    let precioDescuento = precioTotal - descuentoAAplicar;

    let mensaje = "";

    // Comprobar si el número de noches es superior a 5 para darle el precio con o sin descuento
    if (numeroNoches <= NUM_NOCHES_LINDAR_DESCUENTO) {
        mensaje = "El precio total por habitación " + tipoHabitacion + " y " + numeroNoches + " noches es de " + precioTotal + " €.";
    } else {
        mensaje = "El precio total por habitación " + tipoHabitacion + " y " + numeroNoches + " noches es de " + precioTotal + " €. Con el " + PORCENTAJE_DESCUENTO + "% de descuento por estancia superior a " + NUM_NOCHES_LINDAR_DESCUENTO + " noches, el precio con descuento es de " + precioDescuento + " €.";
    }

    document.getElementById("mensaje").textContent = mensaje;

    document.getElementById("formulariohotel").style.display = "none";
}