function mandar(){

    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);

    
    if((mes == 1) && (dia<=20)){
        document.write("Eres Sagitario");
    } else if((mes == 1) && (dia>20)) {
        document.write("Eres Capricornio");
    } else if((mes == 2) && (dia<=16)){
        document.write("Eres Capricornio");
    } else if((mes == 2) && (dia>16)){
        document.write("Eres Acuario");
    } else if((mes == 3) && (dia>21)){
        document.write("Eres Aries");
    } else if((mes == 4) && (dia<=20)){
        document.write("Eres Aries");
    } else if((mes == 4) && (dia>20)){
        document.write("Eres Tauro");
    } else if((mes == 5) && (dia>16)){
        document.write("Eres Acuario");
    } 
    
    
    
    else {
        document.write("Aún no he terminado");
    }   
}