$(document).ready(function() {
    // Variable para controlar el estado del color
    let colorNegro = true;

    // Función para cambiar el color del texto
    function cambiarColor() {
        if (colorNegro) {
            $("#paragraph").css("color", "red"); // Cambiar a rojo
        } else{
            $("#paragraph").css("color", "black"); // Cambiar a negro de nuevo
        }
        colorNegro = !colorNegro; // Cambiar el estado del color
    }

    // Asociar la función al botón de toggle
    $("#buttonChange").click(function() {
        cambiarColor();
    });
});

