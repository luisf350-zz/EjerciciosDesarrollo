/*
    Ejercicio 3:
    Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
*/

function contarOcurrencias(texto, palabra) {
    texto = texto.toLowerCase().replace(/[!.,-]/gi, '');
    palabra = palabra.toLowerCase();

    // 1er opcion
    // console.log(`Se encontraron ${texto.split(palabra).length - 1} coincidencias`);   
    
    // 2da opcion
    var textoArray = texto.split(" ");
    var cont = 0;
    for (let i = 0; i < textoArray.length; i++) {
        if (textoArray[i] === palabra) {
            cont++;
        }
    }

    console.log(`Se encontraron ${cont} coincidencias`);   
}

contarOcurrencias("la palabra es la PALABRA", "es");