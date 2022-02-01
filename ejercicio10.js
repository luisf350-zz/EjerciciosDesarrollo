/*
    Ejercicio 10:
    Dado un numero, mostrar una escalera con escalones de "[-]" usando el numero para las escaleras
*/

function construirEscalera(num) {
    for (let i = 1; i <= num; i++) {
        pintarEscalon(i);
    }
}

function pintarEscalon(escalon) {
    let result="";
    for (let i = 0; i < escalon; i++) {
        result+="[-]";
    }
    console.log(result);
}

construirEscalera(4);