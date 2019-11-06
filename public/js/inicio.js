'use_strict';
productos().then(r=>{
    console.log('lista',r);   
})

let html='';
	console.log('mi lista',r,Object.keys(r));
	Object.keys(r).forEach(id=>{	
	console.log(id);

	const url = window.location;
	const info = r[id]; 

	html+=`
		<div class="col-md-4 col-sm-6 col-xs-12 inventroy-box">
		<img src="images/inventroy1.jpg" alt="Inventory" />
		<div class="inventroy-content">
			<h3>`+info.marca+`</h3>
			<span>2016</span>
			<span>300hp</span>
			<span>automatic</span>
			<h4>START FROM <b>$`+info.priceTaxIncl+`</b></h4>
			<a href="`+url+`" title="Book now">book now</a>
		</div>
		</div>
`;

	})

	console.log(html);

