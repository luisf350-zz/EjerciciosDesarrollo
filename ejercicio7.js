/*
    Ejercicio 7:
    Dados 2 numeros, devolver cuantos impares hay entre ellos  
*/

function cuentaImpares(num1, num2) {
  let result = 0;
  //1er opcion
  //   for (let i = num1; i <= num2; i++) {
  //     if (i % 2 === 1) {
  //       result++;
  //     }
  //   }

  //2da opcion
  while (num1 <= num2) {
    if (num1 % 2 === 1) {
      result++;
    }
    num1++;
  }

  console.log(`Existen ${result} impares entre los 2 números.`);
}

cuentaImpares(1, 100);
