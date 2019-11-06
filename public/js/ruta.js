console.log("archivo ruta");
const rutas = {
    'detalles':{
        titulo  : 'Detalles del automovil',
        carga: 'detalles.html'
    },
    'contacto':{
        titulo  : 'Detalles del automovil',
        carga: 'contactus.html'
    },

    'servicio':{
        titulo  : 'Detalles del automovil',
        carga: 'services.html'
    },
}

function navegar(ruta){
    let load = './contenido.html'
    if(ruta!=''&&ruta!=undefined)
        if( Object.keys( rutas ).includes(ruta) )
            load='./'+rutas[ruta].carga;
        else
            load='./404.html';
    
   // history.pushState({key:ruta}, '', ruta);
    $(".contenido").load(load);
}
function rutaActual(){
    return window.location.pathname.split('/');
}

$(document).ready(function(){
    $(".header").load('./header.html');
    const ruta = rutaActual();
    console.log("hola",ruta);
    navegar(ruta[1]);   

    $(".footer").load('./footer.html');

});
