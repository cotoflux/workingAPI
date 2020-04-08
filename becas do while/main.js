function mandar(){

    let numeroInscritos = document.getElementById("numeroInscritos").value;
    let numeroPrevistoBecas = document.getElementById("numeroPrevistoBecas").value;
    var becados = [];
    var nobecados = [];
    let alumno

    do{
       
        let nombreAlumno = prompt("¿Cómo te llamas?");
        let edadAlumno = prompt("¿Que edad tienes?");
        let tituloAlumno = prompt("¿Tienes título universitario?");
        let paroAlumno = prompt("¿Estas cobrando el paro?");
        
        alumno++;
            if(edadAlumno>=18 && (tituloAlumno == "si" || paroAlumno =="si")){
                becados.push(nombreAlumno);
                document.getElementById("beca").innerHTML = becados;

            }else {
                nobecados.push(nombreAlumno);
                document.getElementById("nobeca").innerHTML = numeroInscritos;
            }
    } while(alumno <= numeroPrevistoBecas && alumno <=numeroInscritos);
    

    
    
    
}