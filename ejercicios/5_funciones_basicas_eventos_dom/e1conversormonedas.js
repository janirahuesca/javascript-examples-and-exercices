function convertirADolares() {
    // Obtener valor del input numérico
    let euros = document.getElementById("euros").valueAsNumber;

    // Mostrar el valor en Dólares
    const valorDolar = 1.05;
    let dolares = euros * valorDolar;
    document.getElementById("resultado").textContent = dolares + " dólares"
}

function convertirALibras() {
    // Obtener valor del input numérico
    let euros = document.getElementById("euros").valueAsNumber;

    // Mostrar el valor en Libras
    const valorLibra = 0.83;
    let libras = euros * valorLibra;
    document.getElementById("resultado").textContent = libras + " libras"
}