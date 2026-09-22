import{Jugador} from "./jugador.js"
export class Extraterrestre extends Jugador {
    constructor(nombre){
        super(nombre,Math.floor(Math.random()*(85-1+1))+1,150)  
    }
    get nombre(){
        return this.miNombre.split("").reverse().join("")
    }
}

