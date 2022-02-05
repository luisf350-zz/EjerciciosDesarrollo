/*
    Ejercicio 14:
    Dado una cadena de texto, devolver el caracter mas usado
*/

function caracterMasRepetido(texto) {
  let textoArray = texto.toUpperCase().replace(" ", "").split("").sort();
  var dict = {};
  let result = "";
  let cantidad = 0;

  for (let i = 0; i < textoArray.length; i++) {
    const caracter = textoArray[i];
    if (dict.hasOwnProperty(caracter)) {
      dict[caracter] = dict[caracter] + 1;
    } else {
      dict[caracter] = 1;
    }
  }

  for (var item in dict) {
    if (cantidad < dict[item]) {
        cantidad = dict[item];
        result = item;
    }
  }

  console.log(result);
}

caracterMasRepetido("especializacion");