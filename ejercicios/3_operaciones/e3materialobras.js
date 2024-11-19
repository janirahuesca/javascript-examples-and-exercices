// Declaración de variables y asignación de valores a las estancias:
let largoHabitacion1 = 5.5;
let anchoHabitacion1 = 5;
let largoHabitacion2 = 4.5;
let anchoHabitacion2 = 6;
let largoSalon = 4;
let anchoSalon = 5;
let largoCocina = 5;
let anchoCocina = 3.5;
let largoBano = 3;
let anchoBano = 2.5;

// Calcular area de cada estancia:
let areaHabitacion1 = largoHabitacion1 * anchoHabitacion1;
let areaHabitacion2 = largoHabitacion2 * anchoHabitacion2;
let areaSalon = largoSalon * anchoSalon;
let areaCocina = largoCocina * anchoCocina;
let areaBano = largoBano * anchoBano;

// Calcular total area:
let areaTotal = areaHabitacion1 + areaHabitacion2 + areaSalon + areaCocina + areaBano;

// Calcular número láminas parquet necesarias:
let areaParquet = areaHabitacion1 + areaHabitacion2 + areaSalon;
let superficieLamina = 0.5;
let numeroLaminasParquet = areaParquet / superficieLamina;

// Calcular número de lozas de granito necesarias:
let areaGranito = areaCocina + areaBano;
let superficieLoza = 0.4;
let numeroLozasGranito = areaGranito / superficieLoza;

// Mostrar la información:
document.write("TOTALES:" + "<br>");
document.write("Ejercicio 1: El total del area de cada estancia es:" + "<br>" +
    "- Habitación 1: " + areaHabitacion1 + " metros cuadrados" + "<br>" +
    "- Habitación 2: " + areaHabitacion2 + " metros cuadrados" + "<br>" +
    "- Salón: " + areaSalon + " metros cuadrados" + "<br>" +
    "- Cocina: " + areaCocina + " metros cuadrados" + "<br>" +
    "- Baño: " + areaBano + " metros cuadrados" + "<br>");
document.write("Ejercicio 2: El area total de la casa es de " + areaTotal + " metros cuadrados" + "<br>");
document.write("Ejercicio 3: El número de láminas de parquet necesarias para la casa es de " + numeroLaminasParquet + "<br>");
document.write("Ejercicio 4: El número de lozas de granito necesarias para la casa es de " + numeroLozasGranito + "<br>");