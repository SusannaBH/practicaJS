//MUESTRA EL MES DEL AÑO
let interruptor = true;
do{
const num = prompt("Por favor, introduce un número y te digo que mes es: ");
        //alert(typeof num);
    interruptor = true;
    switch (num) {
        case "1":
            alert("Este mes es ENERO");
            break;
        case "2":
            alert("Este mes es FEBRERO");
            break;
        case "3":
            alert("Este mes es MARZO");
            break;
        case "4":
            alert("Este mes es ABRIL");
            break;
        case "5":
            alert("Este mes es MAYO");
            break;
        case "6":
            alert("Este mes es JUNIO");
            break;
        case "7":
            alert("Este mes es JULIO");
            break;
        case "8":
            alert("Este mes es AGOSTO");
            break;
        case "9":
            alert("Este mes es SEPTIEMBRE");
            break;
        case "10":
            alert("Este mes es OCTUBRE");
            break;
        case "11":
            alert("Este mes es NOVIEMBRE");
            break;
        case "12":
            alert("Este mes es DICIEMBRE");
            break;
        default:
            alert("Este mes NO EXISTE!!");
            interruptor = false;
            break;
    }
}while(!interruptor);

//CAMBIA UN NUMERO EN LETRAS A NUMERO DEL 1 AL 5
var interruptor1 = true;
do{
const num1 = prompt("Por favor, introduce un número del uno al cinco con letras: ");
        //alert(typeof num);
    interruptor1 = true;
    switch (num1) {
        case "uno":
            alert(num1 + " = 1");
            break;
        case "dos":
            alert(num1 + " = 2");
            break;
        case "tres":
            alert(num1 + " = 3");
            break;
        case "cuatro":
            alert(num1 + " = 4");
            break;
        case "cinco":
            alert(num1 + " = 5");
            break;
        default:
            alert("Este numero NO ES VÁLIDO!!");
            interruptor1 = false;
            break;
    }
}while(!interruptor1);