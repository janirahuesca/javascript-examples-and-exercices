function mostrarDatosMascota() {
    //Obtenemos los valores del formulario y los guardamos en variables
    //Obtener valor de input texto
    let nombre = document.getElementById("nombre").value;

    //Obtener valor de input numerico
    let edad = document.getElementById("edad").valueAsNumber;

    //Obtener los valores del select
    let tipo = document.getElementById("tipo").value;

    //Mostrar mensaje con los datos
    document.getElementById("resultado").textContent = "DATOS DE LA MASCOTA: Nombre: " + nombre + " | Edad: " + edad + " | Tipo: " + tipo;

    //Ocultar el formulario despues de enviar
    document.getElementById("formulariomascota").style.display = "none";
}