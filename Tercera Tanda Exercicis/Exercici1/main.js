function fesCuadrat(){

var caracter = document.getElementById("caracter").value;
var numero = parseFloat(document.getElementById("numero").value);

    if(caracter && numero){

        for(let i=0; i<numero; i++){           
            for(let j=0; j<numero; j++){
                document.getElementById("cuadrat").innerHTML += caracter;
                
            }
            document.getElementById("cuadrat").innerHTML += "<br>";
        }

    }else{
        document.getElementById("cuadrat").innerHTML = "Indrodueix les dades correctament";
    }
}