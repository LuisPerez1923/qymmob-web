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
    $(".bg-header").css("transition", ".6s");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        $(".barra").css("background", "#2b2b2b");
        $(".bg-header").css("opacity", "0.05");
    } else {
        $(".barra").css("background", "none");
        $(".bg-header").css("opacity", "1");
    }
});