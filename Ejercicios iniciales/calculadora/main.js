

function calcular(){

    var numero1 = parseInt(prompt("Escribe un número: "));
    var operacion = prompt("Escribe que operación quieres hacer");
    var numero2 = parseInt(prompt("Escribe un segundo número: "));
   
    if(operacion == "+"){

        let resultat = sumar(numero1, numero2);
        console.log(resultat);

    } else if(operacion == "-"){

        let resultat = resta(numero1, numero2);
        console.log(resultat);

    } else if(operacion == "/"){

        let resultat =divisio(numero1, numero2);
        console.log(resultat);

    } else if(operacion == "*"){

        let resultat = multiplica(numero1, numero2);
        console.log(resultat);

    } else if(operacion == "%"){

        let resultat = modulo(numero1, numero2);
        console.log(resultat);

    } else{
        return "los datos no son correctos";
    }  

}

function sumar(numero1, numero2){
    var suma = numero1 + numero2
    return suma;
}
function resta(numero1, numero2){
    var resta = numero1-numero2;
    return resta;
}
function multiplica(numero1, numero2){
    var multiplicar = numero1-numero2;
    return multiplicar;
}
function divisio(numero1, numero2){
    var dividir = numero1-numero2;
    return dividir;
}
function modulo(numero1, numero2){
    var modulo = numero1-numero2;
    return modulo;
}

