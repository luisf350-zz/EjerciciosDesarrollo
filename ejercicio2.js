/*
    Ejercicio 2:
    Dado una cadena de texto, comprobar si es un palindromo o no.
    Los palíndromos son palabras que se leen igual aun estando ivertidas.
*/

function esPalindromo(texto){
    // let textoArray = texto.split("");
    // let textoArrayInvertido = [...texto.split("").reverse()];
    // for (let index = 0; index < textoArray.length; index++) {
    //     if (textoArray[index] !== textoArrayInvertido[index]) {
    //         console.log("No es palindromo");
    //         return;
    //     }
    // }

    // console.log("Es palindromo");

    let textoInvertido = texto.split("").reverse().join("");
    if (texto === textoInvertido) {
        console.log("Es palindromo");
    } else {
        console.log("No es palindromo");
    }
}

esPalindromo("Luis");