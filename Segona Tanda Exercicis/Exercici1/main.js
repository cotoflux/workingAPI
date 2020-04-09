function calcularMitjana(){

var primeraNota = parseFloat(document.getElementById("nota1").value);
var segonaNota = parseFloat(document.getElementById("nota2").value);
var terceraNota = parseFloat(document.getElementById("nota3").value);

if((primeraNota>10 && primeraNota<0) ||  (segonaNota>10 && segonaNota<0) || (terceraNota>10 && terceraNota<0)){
    var mitjanaNotes = parseFloat(primeraNota + segonaNota + terceraNota)/3
} else {
    document.write("Tus numeros no son correctos");
}



    if(mitjanaNotes < 5){
        document.write("No has superat el curs. Has de recuperar. La teva nota es: " + mitjanaNotes );
    }else if(mitjanaNotes == 5 && mitjanaNotes <= 7 ){
        document.write("Enhorabona! Has aprovat però hauries de seguir practicant. La teva nota es: " + mitjanaNotes);
    }else if(mitjanaNotes>7){
        document.write("Enhorabona! Has superat el curs! Passa ja al següent nivell!. La teva nota es: " + mitjanaNotes);
    }else if(mitjanaNotes>10 || mitjanaNotes<0){
        document.write("No has introduit les notes correctament");
    } else {
        document.write("No has introduit les notes correctament");
    }


}