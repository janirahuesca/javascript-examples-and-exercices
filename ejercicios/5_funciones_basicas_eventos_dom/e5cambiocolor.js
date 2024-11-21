function cambiarColorTitulo() {
    //Obtenemos el color del elemento select
    let color = document.getElementById("color").value;

    //Obtener titulo y cambiarle el color
    document.getElementById("titulo").style.color = color;
}