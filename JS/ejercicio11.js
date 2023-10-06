//1. A partir de la pizza sustituir todos los elemento del array por cervezas🍺.
const array1 = ["🍔", "🥙", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥑"];
console.log("1ª forma = " + array1.fill("🍺", 3)); //Utilizar el metodo fill()
console.log("2ª forma = " + array1.fill("🍺", array1.findIndex((element) => element == "🍕"))); //Si la pizza se mueve de sitio, metodo findIndex()

//2. Encontrar si existe un elemento en el array que sea una piña.
const array2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log("En el array hay 🍍(1ª forma): " + array2.includes("🍍"));
console.log("En el array hay 🍍(2ª forma): " + array2.some((item) => item == "🍍"));
//Como harías que con findIndex() detectar si existe un elemento o no
function existe(icono) {
    return "Existe = " + (array2.findIndex((element) => element == icono) == -1 ? false : true); //Condicional ternario
}
console.log(existe('🍄')); //FALSE
console.log(existe('🍍')); //TRUE

//3. Quita la piña del anterior array.
array2.splice(2, 1);
console.log("1ª forma = " + array2); //Utilizar metodo splice()
console.log("2ª forma = " + array2.filter((element) => element != "🍍")); //Utilizar metodo filter()

//4. A partir del siguiente array convierte todas las fresas en una SETA🍄.
let array3 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
//Reemplazar con .splice(indice, nºelementos, elementoNuevo)
array3 = array3.map(item =>{
    return item == "🍓"?"🍄":item;
});
console.log(array3);
/*  EJEMPLO DE MAP() -->    arrayX = [1,2,3,4,5];
                            const map1 = arrayX.map((x) => x + 2);
                            console.log(map1);*/

//5. Añade el siguiente icono 🥵 inmediatamente después del 🌶️ cada en el siguiente array.
//Output ["🌶️", "🥵", "🥛", "🌶️", "🥵", "🥛", "🌶️", "🥵","🥛"];
let array4 = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
let newArray4 = [];
array4.map(item =>{
    (item == "🌶️") ? newArray4.push("🌶️", "🥵") : newArray4.push(item);
});
console.log("Solución 1 = " + newArray4);
//OTRA FORMA DE HACERLO --> Output [ '🌶️,🥵', '🥛', '🌶️,🥵', '🥛', '🌶️,🥵', '🥛' ]
array4 = array4.map(item =>{
    return item == "🌶️" ? "🌶️" + ",🥵" : item;
});
console.log("Solición 2 = " + array4);

//6. Añade una 🃏 carta comodín entre medio de dos cartas "🎴", "🎴" en el siguiente array.
const array5 = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
let newArray5 = [];
array5.map(item =>{
    (item == "🎴", "🎴") ? newArray5.push("🎴", "🃏") : newArray5.push(item);
});
console.log("SOLUCIÓN = " + newArray5);