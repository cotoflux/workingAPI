function mandar(){

    let mesIntroducido = document.getElementById("mes").value;


    let elmesTiene;
    switch(mesIntroducido){
        case "1": 
            elmesTiene=31;
            break;
        case "2": 
            elmesTiene=28;
            break;
        case "3": 
            elmesTiene=31;
            break;
        case "4":
            elmesTiene=30;
            break;
        case "5": 
            elmesTiene=31;
            break;
        case "6": 
            elmesTiene=30;
            break;           
        case "7": 
            elmesTiene=31;
            break;
        case "8": 
            elmesTiene=30;
            break;
        case "9": 
            elmesTiene=31;
            break;
        case "10": 
            elmesTiene=30;
            break;
        case "11": 
            elmesTiene=30;
            break;
        case "12": 
            elmesTiene=31;
            break;     
        default:
            elmesTiene="Introduce correctamente el mes porfavor"; 
    }
    document.getElementById("demo").innerHTML = "El mes tiene: " + elmesTiene;
}