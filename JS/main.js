//DECLARACION + ASIGNACION
var nombre = "Susanna";
let apellidos = "Bergaz Hernández";
const edad = 29;

console.log(nombre + " " + apellidos + " y tu edad es " + edad); //Forma antigua
console.log( `${nombre}`); //Forma nueva

const persona = {nombre: "Sandra", apellidos: "Bergaz Hdez", edad: "23"};
console.log(persona);

const array = [true, 1, {}];
console.log(array);
console.log(array[2]);
console.log(typeof array);

function saludar(){

    console.log("Hola Mundo");
    console.log("Ey Ey Ey");
    console.log("Adios Mundo");
}

