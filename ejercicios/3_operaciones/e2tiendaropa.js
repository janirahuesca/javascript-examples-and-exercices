// Declaración de variables y asignación de valores a los productos:
let camiseta = 10;
let sudadera = 20.5;
let gorra = 5.5;

// Realización de las operaciones:
let totalCliente1 = (camiseta * 2) + gorra;
let totalCliente2 = camiseta + (gorra * 5);
let descuentoCliente2 = totalCliente2 * 0.20;
let totalCliente2ConDescuento = totalCliente2 - descuentoCliente2;
let totalCliente3 = camiseta + (sudadera * 2) + (gorra * 3);

// Mostrar la información:
document.write("TOTAL COMPRAS DE LOS CLIENTES:" + "<br>");
document.write("Cliente 1: El total de la compra del cliente 1 es de " + totalCliente1 + "euros" + "<br>");
document.write("Cliente 1: El total de la compra del cliente 2 es de " + totalCliente2 + "euros" + "<br>");
document.write("Cliente 2 con descuento: El total de la compra del cliente 2 aplicando el 20% de descuento es de " + totalCliente2ConDescuento + "euros" + "<br>");
document.write("Cliente 1: El total de la compra del cliente 3 es de " + totalCliente3 + "euros" + "<br>");