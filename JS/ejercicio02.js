const names = "Susanna";
const surname = "Bergaz Hernández";

//FUNCION arrow function
const nameSurname = () => {
    return names + " " + surname;
}
console.log(nameSurname());

//FUNCION con nombre y sin return
const verdadero = true;
function comprobar(bool_value){
    console.log("Esto es " + bool_value);
}
comprobar(verdadero);

//FUNCION con parametros infinitos
const funcionInfinita = (...parametros) => {
    parametros.forEach(element => {
        console.log(element);
    });
}
funcionInfinita(1,2,3,4,5);