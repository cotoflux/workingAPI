function mandar(){

    let numeroInscritos = document.getElementById("numeroInscritos").value;

    var i;
    for(i=0; i<numeroInscritos; i++){
        let edadAlumno = prompt("¿Que edad tienes?");
        let tituloAlumno = prompt("¿Tienes título universitario?");
        let paroAlumno = prompt("¿Estas cobrando el paro?");
        
        let alumno = i+1;
        if(edadAlumno>=18 && (tituloAlumno == "si" || paroAlumno =="si")){
            document.write("El alumno " + alumno + " ha sido becado");
        }else{
            document.write("El alumno " + alumno + " No ha sido becado");
        }
    }


}