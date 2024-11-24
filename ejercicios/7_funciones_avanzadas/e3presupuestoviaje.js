function calcularPresupuestoValidacion() {
    // Obtener el formulario
    const FORMULARIO = document.getElementById("formularioviaje");

    // Validar el formulario
    if (FORMULARIO.checkValidity()) {
        calcularPresupuesto();
    } else {
        document.getElementById("mensajeresultado").textContent = "Por favor, completa todas las preguntas antes de enviar.";
    }
}

function calcularPresupuesto() {
    // Obtenemos los valores del formulario
    let destino = document.getElementById("destino").value;
    let numDias = document.getElementById("dias").valueAsNumber;
    let numPersonas = document.getElementById("personas").valueAsNumber;

    // Asignamos el precio según el destino seleccionado
    let precioDestino = asignarPrecioSegunDestino(destino);

    // Calculamos el precio total
    let precioTotal = calcularPrecioTotal(precioDestino, numDias, numPersonas);

    // Aplicamos descuento si corresponde
    let precioFinal;
    if (aplicarDescuento(precioTotal)) {
        precioFinal = calcularPrecioConDescuento(precioTotal);
    } else {
        precioFinal = precioTotal;
    }

    // Mostrar el resultado
    document.getElementById("mensajeresultado").textContent = 
        "El precio total del viaje es:" + precioFinal.toFixed(2) + " €.";
}

function asignarPrecioSegunDestino(destino) {
    let precioDestino = 0;
    if (destino === "nuevayork") {
        precioDestino = 100;
    } else if (destino === "mallorca") {
        precioDestino = 50;
    } else if (destino === "paris") {
        precioDestino = 80;
    } else if (destino === "londres") {
        precioDestino = 70;
    }
    return precioDestino;
}

function calcularPrecioTotal(precio, dias, personas) {
    // Calculamos el total teniendo en cuenta el precio del destino
    let precioFinal = precio * dias * personas;
    return precioFinal;
}

function aplicarDescuento(precioTotal) {
    if (precioTotal > 2000) {
        return true;
    }
}

function calcularPrecioConDescuento(precioTotal) {
    let descuentoAAplicar = (precioTotal * 10) / 100;
    let precioConDescuento = precioTotal - descuentoAAplicar;
    return precioConDescuento;
}