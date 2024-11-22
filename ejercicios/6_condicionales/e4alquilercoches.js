function calcularPrecioValidar() {
    // Obtener el formulario
    let formulario = document.getElementById("formularioalquiler");

    // Validar el formulario
    if (formulario.checkValidity()) {
        calcularPrecio();
    } else {
        document.getElementById("mensaje").textContent = "Por favor, completa todos los campos obligatorios.";
    }
}

function calcularPrecio() {
    // Creamos las constantes con el precio según tipo de coche
    const COCHE_ECONOMICO = 30;
    const COCHE_FAMILIAR = 50;
    const COCHE_LUJO = 100;

    // Creamos una constante con el precio diario por conductor adicional
    const PRECIO_CONDUCTOR_ADICIONAL = 10;

    // Creamos una constante con el descuento a aplicar
    const PORCENTAJE_DESCUENTO = 10;

    // Creamos una constante con el número de días a partir de los cuales se aplicará descuento
    const NUM_DIAS_LINDAR_DESCUENTO = 7;

    // Guardar el valor seleccionado por el usuario en la variable tipo coche
    let tipoCoche = document.getElementById("tipocoche").value;

    // Guardar el valor elegido por el usuario en la variable número de días
    let numeroDias = parseInt(document.getElementById("numdias").value);

    // Guardar el valor elegido por el usuario en la variable conductor adicional
    let tieneConductorAdicional = document.getElementById("conductoradicional").checked;

    // Calcular precio según tipo de coche
    let precioDiario = 0;

    if (tipoCoche === "economico") {
        precioDiario = COCHE_ECONOMICO;
    } else if (tipoCoche === "familiar") {
        precioDiario = COCHE_FAMILIAR;
    } else if (tipoCoche === "lujo") {
        precioDiario = COCHE_LUJO;
    }

    let precioTotal = precioDiario * numeroDias;

    // Calcular precio con plus si tiene conductor adicional
    let extraConductorAdicional = numeroDias * PRECIO_CONDUCTOR_ADICIONAL;
    if (tieneConductorAdicional) {
        precioTotal = precioTotal + extraConductorAdicional;
    }

    // Calcular precio con descuento
    let descuentoAAplicar = (precioTotal * PORCENTAJE_DESCUENTO) / 100;
    let precioDescuento = precioTotal - descuentoAAplicar;

    let mensaje = "";

    // Comprobar si el número de noches es superior a 5 para darle el precio con o sin descuento
    if (numeroDias <= NUM_DIAS_LINDAR_DESCUENTO) {
        mensaje = "El precio total por coche " + tipoCoche + " y " + numeroDias + " días es de " + precioTotal + " €.";
    } else {
        mensaje = "El precio total por coche " + tipoCoche + " y " + numeroDias + " días es de " + precioTotal + " €. Con el " + PORCENTAJE_DESCUENTO + "% de descuento por alquiler superior a " + NUM_DIAS_LINDAR_DESCUENTO + " días, el precio con descuento es de " + precioDescuento + " €.";
    }

    document.getElementById("mensaje").textContent = mensaje;

    document.getElementById("formularioalquiler").style.display = "none";
}