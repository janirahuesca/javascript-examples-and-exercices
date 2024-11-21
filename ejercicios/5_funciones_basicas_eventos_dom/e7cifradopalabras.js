function cifrarPalabra() {
    //Obtener valor de input texto
    let palabraACifrar = document.getElementById("palabra").value;

    // Convertir la palabra introducida a minúsculas
    let palabraMinusculas = palabraACifrar.toLowerCase();

    // Mostrar la palabra sin cifrar en minúsculas
    document.getElementById("texto").textContent = "Palabra sin cifrar: " + palabraMinusculas;

    // Convertir la palabra introducida a mayúsculas
    let palabraMayusculas = palabraACifrar.toUpperCase();

    // Cifrar la palabra
    let palabraCifrada = palabraMayusculas.replaceAll("A", "4");
    palabraCifrada = palabraCifrada.replaceAll("E", "3");
    palabraCifrada = palabraCifrada.replaceAll("I", "1");
    palabraCifrada = palabraCifrada.replaceAll("O", "0");
    palabraCifrada = palabraCifrada.replaceAll("U", "5");


    // Mostrar la palabra cifrada
    document.getElementById("textocifrado").textContent = "Palabra cifrada: " + palabraCifrada;
}