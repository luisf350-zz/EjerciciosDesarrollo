/*
    Ejercicio 4:
    Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios del lenguaje, solo estructuras de control
*/

function invertirCadena(texto) {
    // 1er opcion
    // let textoArray= texto.split('');
    // let newArray = [];
    
    // for (let i = textoArray.length - 1; i >= 0; i--) {
    //     newArray.push(textoArray[i]);
    // }
    // console.log(newArray.join(""));

    // 2da opcion
    let resultado = "";
    for (let letra of texto) {
        resultado = letra + resultado;
    }

    console.log(resultado);
}

invertirCadena("Luis")