function caraOcruz(){
    var result = "cruz";
    var numero_aleatorio = Math.round(Math.random());
    console.log(numero_aleatorio);
    if (numero_aleatorio == 0){
        result = "cara";
    }
    return result;
}
console.log(caraOcruz());