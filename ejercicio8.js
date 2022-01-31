/*
    Ejercicio 8:
    Dado un número entero, inviertelo y devuelve de nuevo el entero
*/

function invierteEntero(num) {
  let esNegativo = num < 0;
  num = Math.abs(num);
  let numeroInvertido = parseInt(num.toString().split("").reverse().join(""));

  console.log(`${esNegativo ? '-':''}${numeroInvertido}`);
}

invierteEntero(-67);
