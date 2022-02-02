/*
    Ejercicio 8:
    Dado un número, mostrar todos los números desde ese al 0 de 8 en 8 en una lista con guiones y cada número debe empezar con No.
*/

function hastaCero(num) {
  while (num > 0) {
    console.log(`- No. ${num}`);
    num = num - 8;
  }
  console.log(`- No. 0`);
  console.log("--- FIN ---");
}

hastaCero(100);
