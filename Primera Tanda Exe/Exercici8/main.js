function navidad(){

    var numero = parseInt(document.getElementById("numero").value);

    for(i=0; i <= numero; i++){
        for(j=0;  j < i; j++){
            document.write("*");
        }
        document.write("<br>");
    }
    
}


