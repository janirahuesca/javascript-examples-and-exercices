function sumar() {
    // Obtener valor de los inputs numéricos
    let numero1 = document.getElementById("numero1").valueAsNumber;
    let numero2 = document.getElementById("numero2").valueAsNumber;

    // Mostrar el resultado de la suma
    let resultadoSuma = numero1 + numero2;
    document.getElementById("resultado").textContent = numero1 + " + " + numero2 + " = " + resultadoSuma;
}

function restar() {
    // Obtener valor de los inputs numéricos
    let numero1 = document.getElementById("numero1").valueAsNumber;
    let numero2 = document.getElementById("numero2").valueAsNumber;

    // Mostrar el resultado de la resta
    let resultadoResta = numero1 - numero2;
    document.getElementById("resultado").textContent = numero1 + " - " + numero2 + " = " + resultadoResta;
}

function multiplicar() {
    // Obtener valor de los inputs numéricos
    let numero1 = document.getElementById("numero1").valueAsNumber;
    let numero2 = document.getElementById("numero2").valueAsNumber;

    // Mostrar el resultado de la multiplicación
    let resultadoMultiplicacion = numero1 * numero2;
    document.getElementById("resultado").textContent = numero1 + " x " + numero2 + " = " + resultadoMultiplicacion;
}

function dividir() {
    // Obtener valor de los inputs numéricos
    let numero1 = document.getElementById("numero1").valueAsNumber;
    let numero2 = document.getElementById("numero2").valueAsNumber;

    // Mostrar el resultado de la división
    let resultadoDivision = numero1 / numero2;
    document.getElementById("resultado").textContent = numero1 + " / " + numero2 + " = " + resultadoDivision;
}
