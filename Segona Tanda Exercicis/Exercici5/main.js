function mandar(){

var numero = parseInt(document.getElementById("numero").value);



    if((numero>5) && (numero%2 == 0) || (numero%3 == 0) || (numero%5 == 0)){
        document.getElementById("primer").innerHTML="El número introduit no es primer";
    } else if(numero==4){
        document.getElementById("primer").innerHTML="El número introduit no es primer";
    } else if ((numero>5) && (numero%2 != 0) || (numero3 != 0) || (numero%5 != 0)){
        document.getElementById("primer").innerHTML="El número introduit es primer";
    } else {
        document.getElementById("primer").innerHTML="Siusplau introdueix un número";
    }
    
    

}