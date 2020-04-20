function celciusFar(){
    

let celsius = parseInt(document.getElementById("celsius").value);
let unCelsius_fahrenheit = 32;
let conversioFahrenheit;


    conversioFahrenheit = (celsius *(9/5)) + unCelsius_fahrenheit;
    document.getElementById("celsiusFar").innerHTML=conversioFahrenheit;
    
} 

function celciusKel(){
    let celsius = parseInt(document.getElementById("celsius").value);
    let unCelsius_kelvin = 273.15;
    let conversioKelvin;

    conversioKelvin = celsius + unCelsius_kelvin;
    console.log(conversioKelvin);
    document.getElementById("celsiusKel").innerHTML=conversioKelvin;
}

function fahrenheitCel(){
    let fahrenheit = parseInt(document.getElementById("fahrenheit").value);
    let fahrenheit_celsius= 273.15;
    let conversioCelsius;

    conversioCelsius = fahrenheit + fahrenheit_celsius;

    document.getElementById("fahrenheitCel").innerHTML=conversioCelsius;

}
    
function fahrenheitKel(){
    let fahrenheit = parseInt(document.getElementById("fahrenheit").value);
    let fahrenheit_kelvin= 273.15;
    let conversioKelvin;

    converionKelvin = fahrenheit 
}