/* ANIMACION DEL NAVBAR AL HACER CLICK EN EL MENU HAMBURGUESA */

$(document).ready(function() {
    $(".navbar").hide();
    $("#menu-hamb").click(function() {
        $(".navbar").toggle("linear");
    });
});

/* ANIMACION SCROLL HACIA ABAJO */

$(window).scroll(function() {
    //animacion para el header
    $(".barra").css("transition", ".4s");
    $(".logo").css("transition", ".4s");
    $(".contenedor").css("transition", ".4s");
    $(".bg-header").css("transition", ".6s");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $(".barra").css("background", "#2b2b2b");
        $(".barra").css("padding-top", "0");
        $(".contenedor").css("max-width", "1200px");
        $(".bg-header").css("opacity", "0.3");
        $(".logo").css("font-size", "2.6rem");
    } else {
        $(".barra").css("background", "transparent");
        $(".barra").css("padding-top", "20px");
        $(".contenedor").css("max-width", "1000px");
        $(".bg-header").css("opacity", "1");
        $(".logo").css("font-size", "3rem");
    }

    //animacion para el formulario (falta arreglar correctamente)
    $(".formulario").css("transition", "1.4s");
    if (document.body.scrollTop > 2150 || document.documentElement.scrollTop > 2150) {
        $(".formulario").css("opacity", "1");
    } else {
        $(".formulario").css("opacity", "0");
    }
});

/* ANIMACION APARECER Y DESAPARECER PRODUCTOS */

$(document).ready(function() {
    $(".productos").hide();
    $(".seccion-productos").css("transform", "scale(0)");
    $(".seccion-productos").css("transition", ".8s");
    $(".seccion-productos").css("height", "0");
    $('.categoria').click(function() {
        $(".productos").show();
        $(".categorias").hide("slow");
        $(".seccion-productos").css("transform", "scale(1)");
        $(".seccion-productos").css("height", "100%");
    });
    $('.ret-categoria').click(function() {
        $(".productos").hide();
        $(".categorias").show("slow");
        $(".seccion-productos").css("transform", "scale(0)");
        $(".seccion-productos").css("height", "0");
    });
});

/* ANIMACIÓN DEL BOTON DEL FOOTER PARA LLEGAR ARRIBA DEL TODO DE LA PÁGINA */

$(document).ready(function() {

    $('.to-up').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 1200);
    });
});