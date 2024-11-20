// Declaración de variable y asignación de valor a la dirección de correo electrónico
let correoElectronico = "janirahuesca@gmail.com";

// Realizar las acciones indicadas en el ejercicio para guardar el resultado en una variable:
let longitudCorreo = correoElectronico.length;
let correoMayusculas = correoElectronico.toUpperCase();
let correoMinusculas = correoElectronico.toLowerCase();
let nuevoCorreo = correoElectronico.replace("gmail.com", "email.es");

// Mostrar la información:
document.write("MOSTRAR DIFERENTES COSAS ACERCA DEL CORREO ELECTRÓNICO:" + "<br>");
document.write("El correo electrónico original es: " + correoElectronico + "<br>");
document.write("El correo electrónico tiene: " + longitudCorreo + " caracteres" + "<br>");
document.write("El correo electrónico en mayúsculas es: " + correoMayusculas + "<br>");
document.write("El correo electrónico en minísculas es: " + correoMinusculas + "<br>");
document.write("Reemplazando 'gmail.com' por 'email.es', el correo electrónico queda así: " + nuevoCorreo + "<br>");