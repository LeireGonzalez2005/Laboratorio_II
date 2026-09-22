// Importar clases
import { Jugador} from "./jugador.js";
import { Maquina } from "./maquina.js";
import { Extraterrestre } from "./extraterrestre.js";
import { Humano } from "./humano.js";

// The Fisher-Yates algorithm for shuffling an array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Inicializar un único array con 50 maquinas, 50 humanos y 50 extraterrestres
let campo = []
for (let i = 0; i<50; i++){
    let maquina = new Maquina("m"+i)
    campo.push(maquina)}

for (let i = 0; i<50; i++){
    let humano = new Humano("h"+i)
    campo.push(humano)}

for (let i = 0; i<50; i++){
    let extraterrestre = new Extraterrestre("e"+i)
    campo.push(extraterrestre)}


// Ordenar los elementos del array al azar
shuffleArray(campo)


// Imprimir el campo
console.log(campo)
// Para ir imprimiendo los turnos
let turno =1

// Mientras quede mas de un jugador en el array pelear por parejas
// while....
while (campo.length>1){
    console.log(`Turno: ${turno}`)
    // Pelear por parejas. Si los elementos que quedan en el array son impares, el último no pelea
    // eliminar los que se quedan fuera
    // ordernar
    for (let i=0; i<campo.length; i++){
        campo[i].luchar(campo[i+1])
        i+=2
    }
    campo.filter(jug=>jug.salud>0)
    shuffleArray(campo)
    turno++
}

// Imprimir campeón. Unico elemento que queda en el array
console.log("Campeón: " + campo[0].nombre)
