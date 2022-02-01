/*
    Ejercicio 11:
    Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda en el texto con [-CENSURADO-]
*/

function censurado(texto, busqueda) {
  if (!texto) {
    if (!busqueda) {
      console.log("No puedes leer el texto ni la busqueda");
    } else {
      console.log("No tenemos texto");
    }
    return;
  }
  if (!busqueda) {
    console.log("No tenemos termino para buscar");
    return;
  }

  console.log(texto.replace(new RegExp(busqueda, "gi"), "[-CENSURADO-]"));

}

censurado("hola mundo hola", "hola");
