function mandar(){

var numero1 = parseInt(document.getElementById("numero1").value);
var numero2 = parseInt(document.getElementById("numero2").value);


    if(numero1<0 ^ numero2<0){
        document.getElementById("quees").innerHTML = "Un dels dos números és negatiu";
    } else {
        document.getElementById("quees").innerHTML = " ";
    }

}