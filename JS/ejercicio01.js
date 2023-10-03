//DECLARAR VARIABLES
var named = "Susanna";
let years = 28;
const CITY = "Barcelona";

//IMPRIMIR VALOR DE VARIABLES POR CONSOLA
console.log("Me llamo " + named + " tengo " + years + " años y vivo en " + CITY);

//IMPRIMIR TIPO DE DATO DE LAS VARIBALES POR CONSOLA
console.log(typeof named, typeof years, typeof CITY);

//DECLARAR UNA VARIABLE LOCAL
function saludar(){
    var named2 = "Sandra";
    console.log("\nHola " + named2);
}
saludar();

//DECLARAR UNA VARIBALE GLOBAL
var named2 = "David";
function saludar2(){
    console.log("\nHola " + named2);
}
saludar2();