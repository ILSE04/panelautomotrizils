'use_strict';
productos().then(r=>{
    console.log('lista',r); 

    let contador = 0;
    let html='';
	console.log('mi lista',r,Object.keys(r));

	Object.keys(r).forEach(id=>{
	contador++;	
	console.log(id);

	//const url = window.location;
	const info = r[id]; 
	const url = 'detalles/'+info.id;
	if (contador <=6) {
	html+=`
		<div class="col-md-4 col-sm-6 col-xs-12 inventroy-box">
		<img src="images/inventroy1.jpg" alt="Inventory" />
		<div class="inventroy-content">
			<h3>`+info.name+`</h3>
			<span>2016</span>
			<span>300hp</span>
			<span>automatic</span>
			<h4>START FROM <b>$`+info.priceTaxIncl+`</b></h4>
			<a href="`+url+`" class="verDescripcion" title="Book now">book now</a> 
		</div>
		</div>
`;
}

	})

	//console.log(html);
	$("#CargarAutos").html(html);

	$(".navegar").click(function(event){
		//console.log("navegar");
		
	  event.preventDefault();
	  let pagina = $(this).data('pagina');
	  $('.contenido').load(pagina);
	
	});

	
	$('.verDescripcion').on('click',function(e){
	//	e.preventDefault();
	//	navegar('detalles');
	
  	})
	
})
