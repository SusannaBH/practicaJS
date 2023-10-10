//VARIABLES
const opcions = [0, 1, 2]; //0 piedra, 1 papel, 2 tijera
let opcionMachine;

//FUNCION aleatoria para calcular lo que elije la maquina
function aleatorio() {
    var opcion = Math.floor(Math.random()*opcions.length);
    return opcion;
}

//FUNCION elecion del usuario
function user(opcionUser) {
    opcionUser = opcionUser;
    opcionMachine = aleatorio();
}