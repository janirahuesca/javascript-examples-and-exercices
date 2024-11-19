// Declaración de variables y asignación de valores a los productos del restaurante:
let precioBocadilloJamon = 3.5;
let cantidadBocadilloJamon = 10;
let restantesJamon = cantidadBocadilloJamon;
let precioBocadilloTortilla = 2.5;
let cantidadBocadilloTortilla = 20;
let restantesTortilla = cantidadBocadilloTortilla;
let precioBocadilloAceiteYTomate = 1.75;
let cantidadBocadilloAceiteYTomate = 30;
let restantesAceiteYTomate = cantidadBocadilloAceiteYTomate;

// Calcular ganancias y resto bocadillos de la mañana:
let gananciasManana = (4 * precioBocadilloJamon) + (10 * precioBocadilloTortilla) + (15 * precioBocadilloAceiteYTomate);
restantesJamon = cantidadBocadilloJamon - 4;
restantesTortilla = cantidadBocadilloTortilla - 10;
restantesAceiteYTomate = cantidadBocadilloAceiteYTomate - 15;

// Mostrar la información de la mañana:
document.write("INFORMACIÓN MAÑANA:" + "<br>");
document.write("- Ganancias mañana = " + gananciasManana + " euros" + "<br>" +
    "- Restantes bocadillo jamón: " + restantesJamon + "<br>" +
    "- Restantes bocadillo tortilla: " + restantesTortilla + "<br>" +
    "- Restantes bocadillo aceite y tomate: " + restantesAceiteYTomate + "<br>");

// Calcular ganancias y resto bocadillos del mediodía:
let gananciasMediodia = (3 * precioBocadilloJamon) + (5 * precioBocadilloTortilla) + (3 * precioBocadilloAceiteYTomate);
restantesJamon = restantesJamon - 3;
restantesTortilla = restantesTortilla - 5;
restantesAceiteYTomate = restantesAceiteYTomate - 3;

// Mostrar la información del mediodía:
document.write("INFORMACIÓN MEDIODÍA:" + "<br>");
document.write("- Ganancias mediodía = " + gananciasMediodia + " euros" + "<br>" +
    "- Restantes bocadillo jamón: " + restantesJamon + "<br>" +
    "- Restantes bocadillo tortilla: " + restantesTortilla + "<br>" +
    "- Restantes bocadillo aceite y tomate: " + restantesAceiteYTomate + "<br>");

// Calcular ganancias y resto bocadillos de la tarde:
let gananciasTarde = (2 * precioBocadilloJamon) + (4 * precioBocadilloTortilla) + (8 * precioBocadilloAceiteYTomate);
restantesJamon = restantesJamon - 2;
restantesTortilla = restantesTortilla - 4;
restantesAceiteYTomate = restantesAceiteYTomate - 8;

// Mostrar la información de la tarde:
document.write("INFORMACIÓN TARDE:" + "<br>");
document.write("- Ganancias tarde = " + gananciasTarde + " euros" + "<br>" +
    "- Restantes bocadillo jamón: " + restantesJamon + "<br>" +
    "- Restantes bocadillo tortilla: " + restantesTortilla + "<br>" +
    "- Restantes bocadillo aceite y tomate: " + restantesAceiteYTomate + "<br>");

// Calcular ganancias y resto bocadillos de la noche:
let descuentoNoche = 0.50;
let gananciasNoche = ((restantesJamon * precioBocadilloJamon) + (restantesTortilla * precioBocadilloTortilla) + (restantesAceiteYTomate * precioBocadilloAceiteYTomate)) * 0.50;

// Mostrar la información de la noche:
document.write("INFORMACIÓN NOCHE:" + "<br>");
document.write("- Ganancias noche = " + gananciasNoche + " euros" + "<br>");

// Calcular ganancia total al final del día:
let gananciaTotal = gananciasManana + gananciasMediodia + gananciasTarde + gananciasNoche;

// Mostrar la información de la mañana:
document.write("INFORMACIÓN TOTAL:" + "<br>");
document.write("- Ganancias del final del día = " + gananciaTotal + " euros");

// Mirar resolución profesora (diferente planteamiento pero mismos resultados)