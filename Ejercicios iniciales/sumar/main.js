function mandar(){

    let numero1 = parseInt(document.getElementById("primerNumero").value);
    let operando = document.getElementById("operador").value;
    let numero2 = parseInt(document.getElementById("segundoNumero").value);
    let operacion;
    
    if(operando == "+"){
        operacion = numero1+numero2
        document.write(operacion);
    } else if(operando == "-") {
        operacion = numero1-numero2;
        document.write(operacion);
    } else if(operando =="*"){
        operacion = numero1 * numero2;
        document.write(operacion);
    } else if(operando == "/"){
        operacion = numero1/numero2;
        document.write(operacion);
    } else {
        document.write("no has introducido los valores correctamente");
    }   
}