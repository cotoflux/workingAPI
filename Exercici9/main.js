function navidad(){

    var numero = parseInt(document.getElementById("numero").value);

    for(i= numero; i >= 1; i--){    
        for(j=1; j<=i; j++){
            document.write("*");
        }
        document.write("<br>");
    }
   
    

}


