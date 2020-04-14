function mandar(){

var aposta = document.getElementById("aposta").value;
var numeroSecret = Math.floor(Math.random() * 100) + 1;

console.log("aposta " + aposta);
console.log(numeroSecret);

do{
    

    if(aposta > numeroSecret){

        diferenciaAposta = aposta - numeroSecret;

            if(diferenciaAposta<10){
                misatge = "Estas aprop"
                document.getElementById("pistes").innerHTML = misatge;
            } else if(diferenciaAposta<40){
                misatge = "Estas molt lluny"
                document.getElementById("pistes").innerHTML = misatge;
            } else{
                misatge = "Has introduit un número no correcte"
                document.getElementById("pistes").innerHTML = misatge;
            }

           aposta = parseInt(prompt(document.getElementById("aposta")));
           console.log(aposta);
           return aposta;


    } else if(aposta > numeroSecret) {
        diferenciaAposta = aposta - numeroSecret;

        if(diferenciaAposta>10){
            misatge = "Estas aprop"
            document.getElementById("pistes").innerHTML = misatge;
        } else if(diferenciaAposta>40){
            misatge = "Estas molt lluny"
            document.getElementById("pistes").innerHTML = misatge;
        } else{
            misatge = "Has introduit un número no correcte"
            document.getElementById("pistes").innerHTML = misatge;
        }

        aposta = parseInt(prompt(document.getElementById("aposta")));
        return aposta;

    } else {
        document.getElementById("pistes").innerHTML=" ";
    }
} while(aposta = numeroSecret){
    document.getElementById("pistes").innerHTML="Has encertat!"
}
}