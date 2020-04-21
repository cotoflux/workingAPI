function perFerFideua(){

let preuKgFideus = parseFloat(document.getElementById("preuKgFideus").value);
let preuKgGambes = parseFloat(document.getElementById("preuKgGambes").value);
let preuKgCalamars = parseFloat(document.getElementById("preuKgCalamars").value);
let amics = parseInt(document.getElementById("amics").value);

let fideus4persones = 0.5;
let gambes4persones = 0.4;
let calamars4persones = 0.2;

let racions = Math.round(amics/4);

let necesitatFideus = racions * fideus4persones;
document.getElementById("kgNecesitoFideus").innerHTML=necesitatFideus.toFixed(2);
let necesitatGambes = racions * gambes4persones;
document.getElementById("kgNecesitoGambes").innerHTML=necesitatGambes.toFixed(2);
let necesitatCalamars = racions * calamars4persones;
document.getElementById("kgNecesitoCalamars").innerHTML=necesitatCalamars.toFixed(2);

let totalPreuFideua = necesitatFideus*preuKgFideus + necesitatGambes *preuKgGambes + necesitatCalamars*preuKgCalamars;
document.getElementById("preuTotal").innerHTML= totalPreuFideua.toFixed(2);

let preuPersona = totalPreuFideua / amics;
document.getElementById("preuPersona").innerHTML= preuPersona.toFixed(2);
}