$(document).ready(function(){
    console.log('carga contenido');
    if($(".slider-section").length){
        $("#home-slider1").revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            delay:6000,
            navigation: {
                arrows:{
                    enable:true,
                    style:"uranus"
                }
            },
            gridwidth:1900,
            gridheight:980 ,			
        });
    }
})