/* ANIMACION DEL NAVBAR AL HACER CLICK EN EL MENU HAMBURGUESA */

$(document).ready(function() {
    $(".navbar").hide();
    $("#menu-hamb").click(function() {
        $(".navbar").toggle("linear");
    });
});

/* ANIMACION DEL HEADER AL HACER SCROLL HACIA ABAJO */

$(window).scroll(function() {
    $(".barra").css("transition", ".4s");
    $(".contenedor").css("transition", ".4s");
    $(".bg-header").css("transition", ".6s");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $(".barra").css("background", "#2b2b2b");
        $(".barra").css("padding-top", "0");
        $(".contenedor").css("max-width", "1200px");
        $(".bg-header").css("opacity", "0.5");
    } else {
        $(".barra").css("background", "transparent");
        $(".barra").css("padding-top", "20px");
        $(".contenedor").css("max-width", "1000px");
        $(".bg-header").css("opacity", "1");
    }
});