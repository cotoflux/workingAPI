function calculaTabla(){

var numero = parseInt(document.getElementById("numero").value);
var multiplica = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

document.getElementById("tabla1").innerHTML = numero + "x" + multiplica[0] +"=" + numero * multiplica[0];
document.getElementById("tabla2").innerHTML = numero + "x" + multiplica[1] +"=" + numero * multiplica[1];
document.getElementById("tabla3").innerHTML = numero + "x" + multiplica[2] +"=" + numero * multiplica[2];
document.getElementById("tabla4").innerHTML = numero + "x" + multiplica[3] +"=" + numero * multiplica[3];
document.getElementById("tabla5").innerHTML = numero + "x" + multiplica[4] +"=" + numero * multiplica[4];       
document.getElementById("tabla6").innerHTML = numero + "x" + multiplica[5] +"=" + numero * multiplica[5];
document.getElementById("tabla7").innerHTML = numero + "x" + multiplica[6] +"=" + numero * multiplica[6];
document.getElementById("tabla8").innerHTML = numero + "x" + multiplica[7] +"=" + numero * multiplica[7];
document.getElementById("tabla9").innerHTML = numero + "x" + multiplica[8] +"=" + numero * multiplica[8];
document.getElementById("tabla10").innerHTML = numero + "x" + multiplica[9]+"=" + numero * multiplica[9];

}

function numero1(numero, multiplica){
    multiplicación = numero * multiplica[0];
}

