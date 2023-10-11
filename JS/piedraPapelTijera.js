//VARIABLES
const opcions = ['🪨', '🧻', '✂️'];
let opcionMachine;
let selectUser;
let playerScore = 0; //Partidas ganadas jugador
let machineScore = 0; //Partidas ganadas máquina

//TODOS LOS ELEMENTOS
const piedraUserEl = document.getElementById('piedraUser');
const papelUserEl = document.getElementById('papelUser');
const tijeraUserEl = document.getElementById('tijeraUser');
const imagenDOM = document.getElementById('imagenMachine');
const resultado = document.getElementById('resultado');
const refreshButton = document.getElementById('refresh');

resultado.innerText = "¡Pulsa una opción!";
//FUNCION aleatoria para calcular lo que elije la maquina
function aleatorio() {
    var opcion = opcions[Math.floor(Math.random()*opcions.length)];
    return opcion;
}

//FUNCION eleccion del usuario
function seleccionUser(e) { // esta funcion está recibiendo automaticamente el evento que llamamos "e"
    const idImagenSeleccionada = e.target.getAttribute("id");
    if( idImagenSeleccionada == 'piedraUser'){ 
        return '🪨';
    } 
    else if (idImagenSeleccionada == 'papelUser'){
        return '🧻';
    }
    else{
        return '✂️';
    }
}

//FUNCION eleccion de la maquina enlazado con la imagen (cambio de imagen)
function cambiarImagenMaquina(opcion) {
    if (opcion == '🪨'){
        imagenDOM.src = "/IMAGES/piedraUser.png"
    }
    else if (opcion == '🧻'){
        imagenDOM.src = "/IMAGES/papelUser.png"
    }
    else{
        imagenDOM.src = "/IMAGES/tijeraUser.png"
    }
}

//FUNCION CONTROL GANADOR
function controlGanador(user, machine){
    let result;
    if (user == machine) {
        result = "- EMPATE -";
    } else if ( (user == '🪨' && machine == '✂️') ||
                (user == '🧻' && machine == '🪨') ||
                (user == '✂️' && machine == '🧻')) {
        playerScore++;
        result = "Gana JUGADOR!";
    } else {
        machineScore++;
        result = "Gana MÁQUINA!";
    }
    resultado.innerText = "JUGADOR: " + playerScore + "\nMÁQUINA: " + machineScore;
    return result;
}

//FUNCION para darle valor a las imagenes del usuario
function jugada(e){
    selectUser = seleccionUser(e); // esta funcion al que le pasamos el evento devuelve '🪨', '🧻' o '✂️' y la asignamos
    opcionMachine = aleatorio(); // con esta llamamos aleatorio que devuelve '🪨', '🧻' o '✂️' y asignamos
    cambiarImagenMaquina(opcionMachine);
    //ahora tenemos las dos elecciones y aqui empieza la logica del ganador
    // para eso creamos una funcion separada
    controlGanador(selectUser, opcionMachine);
}

//TODOS LOS EVENTOS
piedraUserEl.addEventListener('click',(e) => {
    jugada(e);
});
papelUserEl.addEventListener('click',(e) => {
    jugada(e);
});
tijeraUserEl.addEventListener('click',(e) => {
    jugada(e);
});
//Funcion que resetea la pagina
refreshButton.addEventListener("click", function() {
    location.reload();
});
