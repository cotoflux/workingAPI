function mandar(){

var numero = parseInt(document.getElementById("numero").value);
var primo = true;


    for(let i=2; i<=numero; i++){
        if(numero % i == 0){
            primo = false;
            numero = prompt(document.write("Introduce otro número"));
                } 
        if(primo){
            document.getElementById("primer").innerHTML="Es un número primer";
        }

        if(numero == 2){
            document.getElementById("primer").innerHTML="Es un número primer";
        }
    }


} 
    
