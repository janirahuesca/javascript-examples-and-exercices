function encontrarGatito() {
    // Mostrar el mensaje
    document.getElementById("texto").textContent = "Gatito encontrado";

    // Mostrar la imagen
    document.getElementById("imagen").style.display = "block";
}

function perderGatito() {
    // Mostrar el mensaje
    document.getElementById("texto").textContent = "Gatito perdido";

    // Ocultar la imagen
    document.getElementById("imagen").style.display = "none";
}