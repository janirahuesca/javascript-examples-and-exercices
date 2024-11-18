//Declarar funciones saludar y despedir
function saludar () {
    //obtener del html el parrafo con id parrafo. Cambiar su texto
    document.getElementById("parrafo").textContent = "Hola Mundo";
}

function despedir() {
    //obtener del html el parrafo con id parrafo. Cambiar su texto
    document.getElementById("parrafo").textContent = "Adios";
}

function cambiarColor() {
    //obtener del html el parrafo con id parrafo. Cambiar su color a verde
    document.getElementById("parrafo").style.color = "#0fbf64";
}

function ocultar () {
    document.getElementById("parrafo").style.display = "none";
}

function mostrar () {
    document.getElementById("parrafo").style.display = "block";
}