class Compte{
    constructor(nom, cognom, numCompte, minIngres, minTrans){
        this._titularNom = nom;
        this._titularCognom = cognom;
        this._titularNomComplet = this._titularNom + " "+ this._titularCognom;
        this._minIngres=minIngres;
        this._numCompte = numCompte;
        this._numTransaccions=minTrans;
    }

    get titularNom(){
        return this.titularNom;
    }
    get titularCognom(){
        return this.titularCognom;
    }
    get titularNomComplet(){
        return this._titularNomComplet;
    }
    get minIngres(){
        return this._saldoCompte;
    }
    get numTransaccions(){
        return this._numTransaccions;
    }

    set titularNom(nom){
        this._titularNom = nom;
    }
    set titularCognom(cognom){
        this._titularCognom = cognom;
    }

    set minIngres(_minIngres){
        this._minIngres=minIngres;
    }

    set numTransaccions(){
        this._numTransaccions=minTrans;
    }



    ingresar(){

    }
    retirar(){}

    retornarSaldo(){}

    veureTransaccions(){}

    veureCompte(){}
    
}