//ARRAY inicial con los emojis que mostraremos
const emojis = ["🍎","🥑","🌶️","🥝","🍳","🍚","🧁","🍭","🍺","🍉","🫐","🥦"];
//ARRAY final que crearemos con el resultado
let resultado = [];
//INDICES marcados por el usuario para sumar o restar emojis del array final
let insertAtposition = document.getElementById('posicionSumar');
insertAtposition.addEventListener('input', (event) => {
    insertAtposition = event.target.value;
});

let removeAtposition = document.getElementById('posicionRestar');
removeAtposition.addEventListener('input', (event) => {
    removeAtposition = event.target.value;
});

//FUNCION para escoger un emoji aleatorio
function aleatorio(){
    return Math.floor(Math.random()*emojis.length);
}

//FUNCION añadir emojis al final
function addPush() {
    resultado.push(emojis[aleatorio()]);
    console.log(resultado);
}
addPush();addPush();addPush();addPush();

//FUNCION añadir emojis al principio
function addUnshift() {
    resultado.unshift(emojis[aleatorio()]);
    console.log(resultado);
}
addUnshift();

//FUNCION añadir emojis por indice marcado por usuario
function addInsertAt() {
    resultado.splice(insertAtposition, 0, emojis[aleatorio()]);
    console.log(resultado);
}
addInsertAt();

//FUNCION añadir emojis al final
function addPop() {
    resultado.pop(emojis[aleatorio()]);
    console.log(resultado);
}
addPop();addPop();

//FUNCION añadir emojis al principio
function addShift() {
    resultado.shift(emojis[aleatorio()]);
    console.log(resultado);
}
addShift();

//FUNCION añadir emojis por indice marcado por usuario
function addRemoveAt() {
    resultado.splice(removeAtposition, 1);
    console.log(resultado);
}
addRemoveAt();




function updateArrayInDOM(){

}
