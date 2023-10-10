//VARIABLES
const opcions = [0, 1, 2]; //0 piedra, 1 papel, 2 tijera
let opcionMachine;
let selectUser;

//TODOS LOS ELEMENTOS
const piedraUserEl = document.getElementById('piedraUser');
const papelUserEl = document.getElementById('papelUser');
const tijeraUserEl = document.getElementById('tijeraUser');
const imagenDOM = document.getElementById('imagenMachine'); 

//FUNCION aleatoria para calcular lo que elije la maquina
function aleatorio() {
    var opcion = Math.floor(Math.random()*opcions.length);
    return opcion;
}

//FUNCION elecion del usuario
function seleccionUser(e) { // esta funcion está recibiendo automaticamente el evento que llamamos "e"
    const idImagenSeleccionada = e.target.getAttribute("id");
    if( idImagenSeleccionada == 'piedraUser'){ 
        return 0;
    } 
    else if (idImagenSeleccionada == 'papelUser'){
        return 1;
    }
    else{
        return 2;
    }
}

function cambiarImagenMaquina(opcion) {
    if (opcion == 0){
        imagenDOM.src = "/IMAGES/piedraUser.png"
    }
    else if (opcion == 1){
        imagenDOM.src = "/IMAGES/papelUser.png"
    }
    else{
        imagenDOM.src = "/IMAGES/tijeraUser.png"
    }
}

// FUNCION CONTROL GANADOR
function controlGanador(user, machine){
    console.log(user, machine);
}

function jugada(e){
    selectUser = seleccionUser(e); // esta funcion al que le pasamos el evento devuelve 0, 1 o 2 y la asignamos
    opcionMachine = aleatorio(); // con esta llamamos aleatorio que devuelve 0, 1 o 2 y asignamos
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
