/*
    Ejercicio 14:
    Dado un string y un número, repetir el string tantas veces como el número indique
*/

function repiteString(texto, cantidad) {
  let resultado = "";
  for (let i = 0; i < cantidad; i++) {
    resultado += texto;
  }
  console.log(resultado);
}

// Prototipo
String.prototype.repiteTexto = function (cantidad) {
  let resultado = "";
  for (let i = 0; i < cantidad; i++) {
    resultado += this;
  }
  return(resultado);
};

repiteString("Luis", 4);
console.log("Fernando".repiteTexto(3));
