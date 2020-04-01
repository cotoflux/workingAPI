function mandar(){

    let edadAlumno = document.getElementById("edad").value;
    let tituloAlumno = document.getElementById("titulo").value;
    let paroAlumno = document.getElementById("paro").value;

    
    if(edadAlumno>=18 && tituloAlumno == "si"){
        document.write("La essuela puede ofrecerte un beca");
    } else if(edadAlumno >= 18 &&  paroAlumno == "si"){
        document.write("La essuela puede ofrecerte un beca");
    } else {
        document.write("La escuela no puede ofrecerte una beca");
    }
}