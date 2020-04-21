function calculaAny(){

let any = 2000

    for(i=any; any<=2100; i++){
        var obtenFecha = new Date('January 1, ' + any + ' 23:15:30');
        var numeroDia = obtenFecha.getDay();
        var diaSemana = numeroDia;
        if(diaSemana == 0){
         document.getElementById("resposta").innerHTML +=  "El 1 de Enero del año " + any + "si es domingo<br>";
        }
        any++
    }

}