function mandar(){

var numero = parseInt(document.getElementById("numero").value);
var par=[];
var impar=[];
var i;

    for(i=0; i<numero; i++){
        
        let num = parseInt(prompt("Introduce tu número: "));

        if(num%2 == 0){
            par.push(num);
        } else {
            impar.push(num);    
        }
        
    }
document.getElementById("par").innerHTML = par;
document.getElementById("impar").innerHTML = impar;

}

