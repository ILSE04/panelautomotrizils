$(document).ready(function() {

	$(".contenido").load("./contenido.html");
	$(".footer").load("./footer.html");
	
	$('.navegar').on('click',function(envent){
			envent.preventDefault();
			let pagina = $(this).data('pagina');
			console.log(pagina);
			$('#contenido').load(pagina);
		})

	
});
