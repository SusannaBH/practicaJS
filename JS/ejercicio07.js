//Crea una función en la que pasándole un string como parámetro se substituyan las letras O por las A.
let cadena = "Mi perro se llama Loki y es un Border Collie, yo le digo que es mi Border Loki.";

function changeLetters(text) {
    console.log(text.toUpperCase().replace(/O/g, 'A'));
}
changeLetters(cadena);

/*Crea una función que compruebe si un string pasado como parámetro empieza por ‘aca’ y llama dos 
veces a la función una con academia y otra con escuela.*/
let cadena1 = "Academia de policia.";
let cadena2 = "Escuela de infantil.";

function startAca(text) { 
    console.log(text.toLowerCase().startsWith('aca') + ", la frase empieza con 'aca'.");
}
startAca(cadena1);
startAca(cadena2);

//Crea una función que pasándole un Hola nos salude 3 veces utilizando métodos de Strings.
let cadena3 = "HOLA ";

function repeat3(text) {
    console.log(text.repeat(3));
}
repeat3(cadena3);
