function calcularPrecioTotal() {
    // Obtener valor de los inputs
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").valueAsNumber;
    let cantidad = document.getElementById("cantidad").valueAsNumber;
    let descuento = document.getElementById("descuento").valueAsNumber;
    let iva = document.getElementById("iva").valueAsNumber;

    // Calcular el precio total
    let precioBruto = (precio * cantidad)
    let totalDescuento = (precioBruto * descuento) / 100;
    let precioConDescuento = precioBruto - totalDescuento;
    let totalIva = (precioConDescuento * iva) / 100;
    let precioTotal = precioConDescuento + totalIva;

    // Mostrar el resultado del precio final
    document.getElementById("resultado").textContent = "Precio total de " + nombre + " es de " + precioTotal + " €";
}