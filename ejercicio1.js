/*
    Ejercicio 1:
    Dado un número, devolver su tabla de multiplicar completa
*/

function tablaMultiplicar (num){
    console.log(`*** Tabla del ${num} ***`);
    for (let index = 1; index <= 10; index++) {
        console.log(`${num} x ${index} = ${num*index}`);
    }
}

tablaMultiplicar(5);