function mandar(){

    let palabra = document.getElementById("palabra").value;
    var miarray = new Array( );
    miarray.push(palabra);
    document.getElementById("demo").innerHTML = miarray;
    
    var i = miarray;
    for(i=0; i<miarray.length; i++){
        let text = miarray;
        text += miarray + palabra + "<br>";
    }
    
    
 
    
}