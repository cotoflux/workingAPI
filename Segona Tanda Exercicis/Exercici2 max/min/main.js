function mandar(){

var notes = document.getElementById("notes").value;
var notasClase=[];
var notaTotal = 0;
var miNota;
var miNota2;
var notaMayor;
var notaMenor;
    for(i=0; i<notes; i++){
        var miNota = parseFloat(prompt("Introduce la nota del estudiante" + i));
        var miNota2 = miNota;
        notasClase.push(miNota);
    }

    for(i=0; i<notes; i++){
        
        notaTotal = notaTotal + notasClase[i];
    }

    var notaMedia = notaTotal / notes;
    document.getElementById("notaMedia").innerHTML = notaMedia;  
    
    for(i=0; i<notes; i++){

        if(miNota>notasClase[i]){
            notaMayor = miNota
        }
        document.getElementById("maxima").innerHTML = notaMayor;
    }

    for(j=0; j<notes; j++){
        notaMenor = miNota2;
        if(miNota2>notasClase[j]){
            
        }else if(miNota2<=notasClase[j]){
            notaMenor = miNota2;
        }
        document.getElementById("minima").innerHTML = notaMenor;
    }




}