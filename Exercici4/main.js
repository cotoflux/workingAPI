function mandar(){

var numero = parseInt(document.getElementById("numero").value);

    if(numero%2 == 0){
        document.getElementById("parImpar").innerHTML = "El número es par";
    } else {
        document.getElementById("parImpar").innerHTML = "El número es impar";
    }

}