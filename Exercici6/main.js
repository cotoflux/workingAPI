function mandar(){
    
    var text = " ";
    var i = 100;

        while(i>=0){
            text += i +"<br>";
            i = i - 2;
        } 

    document.getElementById("parells").innerHTML = text;
}