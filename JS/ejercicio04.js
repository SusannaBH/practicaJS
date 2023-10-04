//FUNCION sumar 3 números por parámetros
function sumar(num1, num2,num3){
    return num1 + num2 + num3;
}
console.log(sumar(1,2,3));

//FUNCION concadenar nombre y apellidos
function concadenar(names, surname1, surname2){
    return names + " " + surname1 + " " + surname2;
}
console.log(concadenar("Susanna","Bergaz","Hernandez"));

//FUNCION comparar dos numero y devolver el mayor
function numeroMayor(num1, num2){
    if (num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log(numeroMayor(4, 19));
