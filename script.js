function getSeleccion(elementoSeleccionado) {
    switch(elementoSeleccionado){
        case 1:
            titulo = "Automoción";
            texto = "Cuando se trata te soluciones industriales que requieren una precisión sin tacha, sólo se puede confiar en los verdaderos expertos. Profesionales con más de 40 años de experiencia siempre a la vanguardia tecnológica.";
            break;

        case 2:
            titulo = "Aeronáutica";
            texto = "Cuando se trata te soluciones industriales que requieren una precisión sin tacha, sólo se puede confiar en los verdaderos expertos. Profesionales con más de 40 años de experiencia siempre a la vanguardia tecnológica.";
            break;

        case 3:
            titulo = "Ingeniería y desarrollo";
            texto = "Cuando se trata te soluciones industriales que requieren una precisión sin tacha, sólo se puede confiar en los verdaderos expertos. Profesionales con más de 40 años de experiencia siempre a la vanguardia tecnológica.";
            break;
    }
    cambiaTexto(titulo, texto);
}

function cambiaTexto(newTitulo, newTexto) {
    $("#titulo").fadeOut(function() {
        $(this).text(newTitulo).fadeIn();
    });
    $("#texto").fadeOut(function() {
        $(this).text(newTexto).fadeIn();
    });
}