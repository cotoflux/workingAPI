function mandar(){

var numero1 = parseInt(document.getElementById("nota1").value)
var numero2 = parseInt(document.getElementById("nota2").value);

if(numero1 && numero2 >10){
    document.getElementById("media").innerHTML = "Los números introducidos son superiores a 10, la evaluación es de 0 a 10";
} else {
    var media = (numero1 + numero2)/2
    console.log(media);
    document.getElementById("media").innerHTML = media;
}

}