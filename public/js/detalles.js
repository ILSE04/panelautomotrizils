'use strict';
console.log("archivoDetalles.js");
$(document).ready(function() {
	
	if (rutaActual()[1]!=''&&rutaActual()[2]!=undefined){
		producto(rutaActual()[2]).then(detallesAuto=>{
			console.log('detallesAuto', detallesAuto);

			/*let html='';

			 $("#precio").html(
			 	(r.priceTaxIncl!=0||r.priceTaxIncl!="0")?
			 	'$'+r.priceTaxIncl+'<span>/ A la venta</span>':
			 	'Envia<span>/Inbox</span>'

			 $("#marca").html(
			 	(r.marca!=0||r.marca!="0")?
			 	'$'+r.marca+'<span>/ A la venta</span>':
			 	'Envia<span>/Inbox</span>'*/

		})

	}else{
		navegar('inicio');
	}

	console.log('adsas',rutaActual());
})