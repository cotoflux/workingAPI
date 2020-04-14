function mandar(){

var numero = parseInt(document.getElementById("numero").value);
var factorial=1;



    for(let i=1; i<=numero ; i++){
        factorial = factorial * i;
             
    }

    document.getElementById("factorial").innerHTML = factorial;
    

}