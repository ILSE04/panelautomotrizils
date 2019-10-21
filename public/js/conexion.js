'use_strict';
const config = {
    //servidor:'https://us-central1-encouraging-mix-111109.cloudfunctions.net/api/',  
    servidor:'https://us-central1-encouraging-mix-111109.cloudfunctions.net/',
    app:'seminuevos/',
    eid:'PanelDemoAuto'
}
let idProducto = '';
function nav(n){
    $('.contenido').load(n);
}
function productos(d={}) {
    /*
     productos({
        limite:4,
     })
    */
    return new Promise((res,rej)=>{
        $(document).ready(function(){
            let productos = localStorage.getItem('productos');            
            if(productos==undefined)
                $.ajax({
                    url: config.servidor+config.app+'lista/'+config.eid,
                    dataType: "json",
                    type: 'GET',
                    success: function (data) {
                       // console.log("Got data", data);
                        localStorage.setItem('productos', JSON.stringify( data ) );
                        res(filtro(data,d));
                    },
                    error: function (xhr, status, error) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log('status: ' + JSON.stringify(status));
                    },
                });
            else
                res( filtro(JSON.parse(productos),d));
        })  
    })     
}
function producto(id) {
    /*
     producto(id)
    */
    return new Promise((res,rej)=>{
        $(document).ready(function(){
            let productos = localStorage.getItem('productos');            
            if(productos==undefined)
               productos()
            else
                res( verProducto(id) );
        })  
    })     
}
function verProducto(id) {
    return new Promise((res,rej)=>{
            let productos =  localStorage.getItem('productos');
            productos = (productos!=undefined)?JSON.parse(productos):{};
            if(productos[id]!=undefined)
                res( productos[id]);
            else
                rej
    })     
}

function filtro(d,q){
    let o=[];
    switch (q) {
      
        default:
        o=d;
        break;
    }
    if(q!=undefined)
        if(q['limite']!=undefined)
            o = d.slice(0,Number(q['limite']))
    console.log(d,q);
    return o;
}

/*productos().then(r=>{
    console.log(r);
    
})*/