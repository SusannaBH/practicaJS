//ARRAY inicial con los emojis que mostraremos
const emojis = ["🍎","🥑","🌶️","🥝","🍳","🍚","🧁",
                "🍭","🍺","🍉","🫐","🥦","🍋","🍍",
                "🍕","🍟","🥞","🥩","🍱","🍢","🥥",
                "🥒","🥜","🫓","🍩","🍰","🥛","🍮"];
//ARRAY final que crearemos con el resultado
let resultado = [];

/*  TODOS LOS ELEMENTOS DOM  */
const insertAtpositionEl = document.getElementById('posicionSumar');
const removeAtpositionEl = document.getElementById('posicionRestar');
const resultadoDOM = document.getElementById('resultadoFinal');
const btnPushEl = document.getElementById('push');
const btnUnshiftEl = document.getElementById('unshift');
const btnInsertAtEl = document.getElementById('insertAt');
const btnPopEl = document.getElementById('pop');
const btnShiftEl = document.getElementById('shift');
const btnRemoveAtEl = document.getElementById('removeAt');

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
    updateArrayInDOM();
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
    updateArrayInDOM();
}
//addPop();addPop();

//FUNCION añadir emojis al principio
function addShift() {
    resultado.shift();
    updateArrayInDOM();
}
//addShift();

//FUNCION añadir emojis por indice marcado por usuario
function addRemoveAt() {
    resultado.splice(removeAtpositionEl.value-1, 1);
    updateArrayInDOM();
}
//addRemoveAt();

//FUNCION para actulizar el resultado visible
function updateArrayInDOM(){
    resultadoDOM.innerHTML = resultado;
}

/* TODOS LOS EVENTOS */
insertAtpositionEl.addEventListener('input', validarInput);
btnInsertAtEl.addEventListener('click', addInsertAt);
/* OTRA FORMA DE HACERLO
    btnInsertAt.addEventListener('click', () => {
    addInsertAt();
    updateArrayInDOM();
}); */
removeAtpositionEl.addEventListener('input', validarInput);
btnRemoveAtEl.addEventListener('click', addRemoveAt);
btnPushEl.addEventListener('click', addPush);
btnUnshiftEl.addEventListener('click', addUnshift);
btnPopEl.addEventListener('click', addPop);
btnShiftEl.addEventListener('click', addShift);