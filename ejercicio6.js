/*
    Ejercicio 6:
    Dibujar un cuadrado hueco con asteriscos
*/

function dibujarCuadrado(capacidad) {
    for (let i = 1; i <= capacidad; i++) {
        let linea= "";
        for (let j = 1; j <= capacidad; j++) {
            if (i === 1 || i === capacidad) {
                linea += "*";
            } else if (j === 1 || j === capacidad) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}

dibujarCuadrado(4);