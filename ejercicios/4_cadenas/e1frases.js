// Declaración de variable y asignación de valor a la frase:
let frase = "Un viaje de 1000 millas comienza con el primer paso";

// Realizar las acciones indicadas en el ejercicio para guardar el resultado en una variable:
let longitudFrase = frase.length;
let fraseMayusculas = frase.toUpperCase();
let fraseMinusculas = frase.toLowerCase();
let nuevaFrase = frase.replace("1000", "mil");

// Mostrar la información:
document.write("MOSTRAR DIFERENTES COSAS ACERCA DE LA FRASE:" + "<br>");
document.write("La frase original es: " + frase + "<br>");
document.write("La frase tiene: " + longitudFrase + " caracteres" + "<br>");
document.write("La frase en mayúsculas es: " + fraseMayusculas + "<br>");
document.write("La frase en minísculas es: " + fraseMinusculas + "<br>");
document.write("Reemplazando '1000' por 'mil', la frase queda así: " + nuevaFrase + "<br>");