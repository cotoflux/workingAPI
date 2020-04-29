
var arrayHotels = [];

function crearHotel(){

    var nom = document.getElementById("nom").value;
    var habitacions = document.getElementById("habitacions").value;
    var plantes = document.getElementById("plantes").value;
    var superficie = document.getElementById("superficie").value;
    
    meuHotel = new Hotel(nom, habitacions, plantes, superficie);
    arrayHotels.push(meuHotel);
    console.log(meuHotel);

}

function veureHotel(){

    var veureHotel = document.getElementById("veureHotels").value;
    
    for(i=0; i<arrayHotels.length; i++){
        if(arrayHotels[i]._nomHotel === veureHotel){
            console.log(arrayHotels[i].nomHotel);
            console.log(arrayHotels[i].numHabitacions);
            console.log(arrayHotels[i].numPlantes);
            console.log(arrayHotels[i].supHotel);
        }
    }

}

function donarDeBaixaHotel(){

    var baixaHotel = document.getElementById("nomBaixa").value;

    for(j=0; j<arrayHotels.length;j++){
        if(arrayHotels[j]._nomHotel === baixaHotel){
            console.log("Encara pendent de donar de baixa");
            arrayHotels.splice(j,1);
            console.log("La meva array ara es: " + arrayHotels);
        }
    }

}



function modificarHotel(){


}
