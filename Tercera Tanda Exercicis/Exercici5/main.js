function comprobaDNI(){

let DNIUsuari= document.getElementById("DNIINtroduit").value;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var letraUsuari = DNIUsuari.slice(8, 9);
var numeroUsuari = DNIUsuari.slice(0, 8);
var posicioArray = numeroUsuari%23;
var letraCalculada =letras[posicioArray];

if(letraUsuari === letraCalculada){
  document.getElementById("DNI").innerHTML= "Tu letra es correcta";
}else{
  document.getElementById("DNI").innerHTML= "Tu letra es incorrecta";
}



}