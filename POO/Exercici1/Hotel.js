class Hotel{
    constructor(nom, habitacions, plantes, superficie){
        this._nomHotel = nom;
        this._numHabitacions = habitacions;
        this._numPlantes = plantes;
        this._supHotel = superficie; 
    }

    get nomHotel(){
        return this._nomHotel;
    }

    set nomHotel(nom){
        this._nomHotel=nom;
    }

    get numHabitacions(){
        return this._numHabitacions;
    }

    set numHabitacions(habitacions){
        this._numHabitacions=habitacions;
    }

    get numPlantes(){
        return this._numPlantes;
    }

    set numPlantes(plantes){
        this._numPlantes=plantes;
    }

    get supHotel(){
        return this._supHotel;
    }

    set supHotel(superficie){
        this._supHotel=superficie;
    }

    calcularManteniment(_habitacions){
        let habitacionsPersona = 20;
        let preuPersona = 1500;
        let necPersones = Math.ceil(this._numHabitacions/habitacionsPersona);
        let costPersonal = necPersones * preuPersona;
        console.log("El cost del manteniment es de : ") + costPersonal;
    }
}
