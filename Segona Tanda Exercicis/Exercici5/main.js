function mandar(){

var numero = parseInt(document.getElementById("numero").value);



    if(numero%2 == 0){
        document.getElementById("primer").innerHTML="El número introducido es primer";
    } else if(numero%2 != 0){
        document.getElementById("primer").innerHTML="El número introducido no es primer";
    } else {
        document.getElementById("primer").innerHTML="El número introducido es incorrecto";
    }
    

}