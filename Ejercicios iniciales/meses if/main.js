function mandar(){

    let mesIntroducido = document.getElementById("mes").value;


    let elmesTiene;
    if(mesIntroducido== 1){
        elmesTiene=31;
    }else if(mesIntroducido == 2){
        elmesTiene=28;
    }else if(mesIntroducido == 3){
        elmesTiene=31;
    }else if(mesIntroducido == 4){
        elmesTiene=30;
    }else if(mesIntroducido == 5){
        elmesTiene=31;
    }else if(mesIntroducido == 6){
        elmesTiene=30;
    }else if(mesIntroducido == 7){
        elmesTiene=31;
    }else if(mesIntroducido == 8){
        elmesTiene=30;
    }else if(mesIntroducido == 9){
        elmesTiene=31;
    }else if(mesIntroducido == 10){
        elmesTiene=30;
    }else if(mesIntroducido == 11){
        elmesTiene=30;
    }else if(mesIntroducido == 12){
        elmesTiene=31;
    }else{
        elmesTiene="Introduce correctamente el mes porfavor"; 
    }
    document.getElementById("demo").innerHTML = "El mes tiene: " + elmesTiene;
}