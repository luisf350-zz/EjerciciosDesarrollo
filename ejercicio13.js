/*
    Ejercicio 8:
    Dado un array, dividirlo en tantos sub arrays como sea necesario basandonos en un número que indique su tamaño
*/

function divideArray(arreglo, cantidad) {
  let result = [];
  while (arreglo.length > 0) {
    let xxx = arreglo.slice(0, cantidad);
    result.push(xxx);
    arreglo = arreglo.slice(2, arreglo.length);
  }

  console.log(result);
}

divideArray([7, 8, 9, 10, 11], 2);
