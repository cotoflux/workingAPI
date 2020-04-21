function calculaAny(){

let any = document.getElementById("any").value;
var obtenFecha = new Date('January 1, ' + any + ' 23:15:30');
var numeroDia = obtenFecha.getDay();
var diaSemana = numeroDia;

    if(diaSemana == 0){
        document.getElementById("resposta").innerHTML = "Si es domingo";
    } else if (diaSemana == 1 || diaSemana ==2 || diaSemana==3 || diaSemana==4 || diaSemana==5 | diaSemana==6){
        document.getElementById("resposta").innerHTML = "No es domingo";
    } else {
        document.getElementById("resposta").innerHTML = "El dato introducido no es correcto";
    }

}