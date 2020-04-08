function mandar(){
    var text = " ";
    var i = 100;
    while(i>=100){
        text += i;
        i = i + 2;
    } 
    document.getElementById("quees").innerHTML = text;
}