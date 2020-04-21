function perFerFideua(){

let frase = document.getElementById("frase").value;
let fraseUp=frase.toUpperCase();
let fraseLower= frase.toLowerCase();

if(frase == fraseUp){
  document.getElementById("minusculasMayúsculas").innerHTML = "La frase está en Mayúsculas";
}else if (frase == fraseLower){
  document.getElementById("minusculasMayúsculas").innerHTML = " La frase está en Minúsculas";
}else{
  document.getElementById("minusculasMayúsculas").innerHTML = "La frase está en Minúsculas y Mayúsculas";
}

}