//ARRAY inicial con los emojis que mostraremos
const emojis = ["🍎","🥑","🌶️","🥝","🍳","🍚","🧁","🍭","🍺","🍉","🫐","🥦"];
//ARRAY final que crearemos con el resultado
let resultado = [];

/*  TODOS LOS ELEMENTOS DOM  */
const insertAtpositionEl = document.getElementById('posicionSumar');
const removeAtpositionEl = document.getElementById('posicionRestar');
const resultadoDOM = document.getElementById('resultadoFinal');
const btnPushEl = document.getElementById('push');
const btnInsertAt = document.getElementById('insertAt');

//INDICES marcados por el usuario para sumar o restar emojis del array final
function validarInput (event) {
    const valorInput = event.target.value;
    if(valorInput <= (resultado.length-1)){
        return true;
    }
    alert("El valor es demasiado grande! Máximo: " + (resultado.length));
    event.target.value = resultado.length;
}

//FUNCION para escoger un emoji aleatorio
function aleatorio(){
    return Math.floor(Math.random()*emojis.length);
}

//FUNCION añadir emojis al final
function addPush() {
    resultado.push(emojis[aleatorio()]);
    updateArrayInDOM();
}
//addPush();addPush();addPush();addPush();

//FUNCION añadir emojis al principio
function addUnshift() {
    resultado.unshift(emojis[aleatorio()]);
    console.log(resultado);
}
//addUnshift();

//FUNCION añadir emojis por indice marcado por usuario
function addInsertAt() {
    resultado.splice(insertAtpositionEl.value-1, 0, emojis[aleatorio()]);
    updateArrayInDOM();
}
//addInsertAt();

//FUNCION añadir emojis al final
function addPop() {
    resultado.pop();
    console.log(resultado);
}
//addPop();addPop();

//FUNCION añadir emojis al principio
function addShift() {
    resultado.shift();
    console.log(resultado);
}
//addShift();

//FUNCION añadir emojis por indice marcado por usuario
function addRemoveAt() {
    resultado.splice(removeAtpositionEl.value-1, 1);
    console.log(resultado);
}
//addRemoveAt();

//FUNCION para actulizar el resultado visible
function updateArrayInDOM(){
    resultadoDOM.innerHTML = resultado;
}

/* TODOS LOS EVENTOS */
insertAtpositionEl.addEventListener('input', validarInput);
btnInsertAt.addEventListener('click', addInsertAt);
/* btnInsertAt.addEventListener('click', () => {
    addInsertAt();
    updateArrayInDOM();
}); */
removeAtpositionEl.addEventListener('input', validarInput);
btnPushEl.addEventListener('click', addPush);
