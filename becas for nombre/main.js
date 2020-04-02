function mandar(){

    let numeroInscritos = document.getElementById("numeroInscritos").value;
    var becados = [];
    var i;
    for(i=0; i<numeroInscritos; i++){
        let nombreAlumno = prompt("¿Cómo te llamas?");
        let edadAlumno = prompt("¿Que edad tienes?");
        let tituloAlumno = prompt("¿Tienes título universitario?");
        let paroAlumno = prompt("¿Estas cobrando el paro?");
        
        let alumno = "para el alumno " + (i+1);
        if(edadAlumno>=18 && (tituloAlumno == "si" || paroAlumno =="si")){
            becados.push(nombreAlumno);
            console.log(becados);
        }
    }

    document.getElementById("beca").innerHTML = becados;

}