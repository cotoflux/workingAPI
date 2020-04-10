function mandar(){

var notes = document.getElementById("notes").value;
var notasClase=[];
var notaTotal = 0;

    for(i=0; i<notes; i++){
        var miNota = parseFloat(prompt("Introduce la nota del estudiante" + i));
        notasClase.push(miNota);
    }

    for(i=0; i<notes; i++){
        
        notaTotal = notaTotal + notasClase[i];
    }

    var notaMedia = notaTotal / notes;
    document.getElementById("notaMedia").innerHTML = notaMedia;  

}