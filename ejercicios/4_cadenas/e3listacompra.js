// Declaración de variable y asignación de valor a la lista de la compra:
let listaCompra = "Pan, Vino, Queso, Aceite de oliva";

// Realizar las acciones indicadas en el ejercicio para guardar el resultado en una variable:
let longitudListaCompra = listaCompra.length;
let listaCompraMayusculas = listaCompra.toUpperCase();
let listaCompraMinusculas = listaCompra.toLowerCase();
let listaCompraContieneManzana = listaCompra.includes("manzana");
let nuevaListaCompra = listaCompra.replace("Pan", "Lechuga");

// Mostrar la información:
document.write("MOSTRAR DIFERENTES COSAS ACERCA DE LA LISTA DE LA COMPRA:" + "<br>");
document.write("La lista de la compra original es: " + listaCompra + "<br>");
document.write("La lista de la compra tiene: " + longitudListaCompra + " caracteres" + "<br>");
document.write("La lista de la compra en mayúsculas es: " + listaCompraMayusculas + "<br>");
document.write("La lista de la compra en minúsculas es: " + listaCompraMinusculas + "<br>");
document.write("La lista de la compra contiene 'manzana'?: " + listaCompraContieneManzana + "<br>");
document.write("Reemplazando 'Pan' por 'Lechuga', la lista de la compra queda así: " + nuevaListaCompra + "<br>");