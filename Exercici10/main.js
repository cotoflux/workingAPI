function navidad(){

    var numero = parseInt(document.getElementById("numero").value);
   // var numeroMenos=numero-1

    for(i=0; i <= numero; i++){
        for(j=1;  j < i; j++){
            document.write("*");
        }
        document.write("<br>");
    }

    for(i= numero; i >= 1; i--){    
        for(j=1; j<=i; j++){
            document.write("*");
        }
        document.write("<br>");
    }
   
    

}


