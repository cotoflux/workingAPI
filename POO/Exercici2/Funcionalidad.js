var clientsBanc =[];
function altaCompte(){

    var nom = document.getElementById("nom").value;
    var cognom = document.getElementById("cognom").value;
    var numCompte = document.getElementById("numCompte").value;
    var minIngres = document.getElementById("minIngres").value;
    var minTrans=0;
    var aIngresar;

    if(minIngres<50){
        window.alert("Recorda el mínim son 50€ d'ingrés");
    } else {
        aIngresar = minIngres; 
    }
    console.log(numCompte);
    var nomComplert = nom + " " + cognom;
    console.log(nomComplert);
    console.log(aIngresar);

    meuCompte = new Compte(nom, cognom, numCompte, minIngres, minTrans);
    console.log(clientsBanc);

    if(clientsBanc.length==0){
         clientsBanc.push(meuCompte);
    }else {
        for(let i=0; i<clientsBanc.length; i++){
            if(clientsBanc[i].titularNomComplet === nomComplert || clientsBanc[i].numCompte === nunCompte){
                document.write("Ho sentim no podem crear el compte per que aquest titular ja existeix");
            }else{
                clientsBanc.push(meuCompte);
                console.log(clientsBanc);
            }
        }
    }

    
    
    
}