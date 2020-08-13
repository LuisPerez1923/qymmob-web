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

    //animacion para el formulario (falta arreglar correctamente)
    $(".formulario").css("transition", "1.4s");
    if (document.body.scrollTop > 2150 || document.documentElement.scrollTop > 2150) {
        $(".formulario").css("opacity", "1");
    } 
    else {
        $(".formulario").css("opacity", "0");
    }
});

/* ANIMACIÓN DEL BOTON DEL FOOTER PARA LLEGAR ARRIBA DEL TODO DE LA PÁGINA */
	
$(document).ready(function(){
 
	$('.to-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1200);
	}); 
});