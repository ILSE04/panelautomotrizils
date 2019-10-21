'use_strict';
productos().then(r=>{
    console.log('lista',r);   
})



let html= '';
	console.log('mi lista',r,Object.keys(r));
	Object.keys(r).forEach(id=>{
	console.log(id);

	const url = window.location;
	const info = r[id]; 

	html+= `
	<div class="row">
		<div class="col-md-4 col-sm-6 col-xs-12 inventroy-box">
		<img src="images/inventroy1.jpg" alt="Inventory" />
		<div class="inventroy-content">
			<h3>aucra al-series</h3>
			<span>2016</span>
			<span>300hp</span>
			<span>automatic</span>
			<h4>START FROM <b>$59,999</b></h4>
			<a href="#" title="Book now">book now</a>
		</div>
	</div>
`;
	})


