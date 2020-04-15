function mandar(){
    

let numero = parseInt(document.getElementById("numero").value);
let unCelsius_fahrenheit = 32;
let unCelsius_kelvin = 273.15;
let conversioFahrenheit;
let conversioKelvin;

    conversioFahrenheit = (numero *(9/5)) + unCelsius_fahrenheit;
    document.getElementById("fahrenheit").innerHTML=conversioFahrenheit;

    conversioKelvin = numero + unCelsius_kelvin;
    document.getElementById("kelvin").innerHTML=conversioKelvin;

    
} 
    
