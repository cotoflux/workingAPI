function giraFrase(){

let frase = document.getElementById("frase").value;
var invertirCadena = [];
let longitud = frase.length;


for(let i=longitud; i>=0; i--) {
  invertirCadena.push(frase[i-1]);
}    

document.getElementById("reves").innerHTML=invertirCadena;

}