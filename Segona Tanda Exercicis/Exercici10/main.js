function cuadrat(){
    

let costat = parseInt(document.getElementById("costat").value);
let area = costat*costat;

document.getElementById("resultatCuadrat").innerHTML=area;
    
} 

function triangle(){
    

    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);
    let area = (base*altura)/2;
    
    document.getElementById("resultatTriangle").innerHTML=area;
        
} 

function rectangle(){
    
        let base = parseInt(document.getElementById("base1").value);
        let altura = parseInt(document.getElementById("altura1").value);
        let area = base*altura;
        document.getElementById("resultatRectangle").innerHTML=area;
            
} 

    
function cercle(){
    
    let radi = parseInt(document.getElementById("radi").value);
    let pi = 3.1416;
    let area = Math.floor(pi*radi*radi);
    document.getElementById("resultatCercle").innerHTML=area;
        
} 
