/*
    Ejercicio 9:
    Dados 2 arrays, devolver 1 array con los elementos comunes entre ambos
*/

function arrayComunes(array1, array2) {
  // 1er Solucion
  //   let result = [];
  //   for (let i = 0; i < array1.length; i++) {
  //     const element = array1[i];
  //     if (array2.includes(element)) {
  //       result.push(element);
  //     }
  //   }
  //   console.log(result);

  // 2da solucion
  let result = array1.filter(element => array2.includes(element));
  console.log(result);
}

arrayComunes([4, 5, 6, 7], [7, 8, 9, 7, 5]);
