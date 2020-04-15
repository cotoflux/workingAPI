function mandar(){
    

var numero = parseInt(document.getElementById("numero").value);


    if(numero){
        if((numero%4==0) && (numero%100 !=0) || (numero%400==0)){
            document.getElementById("bisiest").innerHTML= "Es bisiesto";
        } else {
            document.getElementById("bisiest").innerHTML= "No es bisiesto";
            numero = parseInt(document.getElementById("numero").value);
        }
    }else{
        document.write("No has introduit un any");
    }

    
} 
    
