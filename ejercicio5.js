/*
    Ejercicio 5:
    Cuanto es el X por ciento de X numero?
*/

function calcularPorcentaje(porcentaje, numero) {
    let result = numero * (porcentaje/100);

    console.log(`El resultado es ${result}%`);
}

calcularPorcentaje(43, 897);