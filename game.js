let theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
let dojoDiv = document.querySelector("#the-dojo");
    
// Crea las filas de botones para este juego
function render(theDojo) {
    let result = "";
    for(let i=0; i<theDojo.length; i++) {
        for(let j=0; j<theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}
    
// TODO - Haz que esta función nos diga cuántos ninjas están escondidos 
//        Debajo de los cuadros adyacentes (todos los lados y esquinas)
//        Usa i y j como los índices para verificar theDojo
function howMany(i, j, element) {
    let sum = 0;
    // console.log(sum);
    console.log(theDojo[i][j]);
    if(i == 0 && j == 0) {
        sum += theDojo[(i + 1)][j] + theDojo[i][(j + 1)] + theDojo[(i + 1)][(j + 1)];
    }
    else if(i > 0 && j == 0) {
        sum = theDojo[(i - 1)][j] + theDojo[(i - 1)][(j + 1)] + theDojo[(i)][(j + 1)] + theDojo[(i + 1)][j] + theDojo[(i + 1)][(j + 1)];
    }
    else if(i == 0 && j > 0) {
        sum = theDojo[i][(j - 1)] + theDojo[(i + 1)][(j - 1)] + theDojo[(i + 1)][j] + theDojo[(i + 1)][j] + theDojo[(i + 1)][(j + 1)];
    }
    else if(i > 0 && j > 0) {
        sum = theDojo[(i - 1)][(j - 1)] + theDojo[(i - 1)][j] + theDojo[(i - 1)][(j + 1)] + theDojo[i][(j - 1)] + theDojo[i][(j + 1)] + theDojo[(i + 1)][(j - 1)] + theDojo[(i + 1)][j]+ theDojo[(i + 1)][(j + 1)];
    }
    // console.log(sum);
    
    // console.log({i, j});
    // console.log(element);
    // alert("TODO - determina cuántos ninjas se están escondiendo en los recuadros adyacentes");
    alert(sum);

}
    
// BONUS CHALLENGES
// 1. dibuja el número en el inferior en vez de alertarlo
// 2. al comienzo, sitúa 10 ninjas al azar en theDojo con al menos 1 en cada lugar
// 3. si haces clic en un ninja, el juego debe comenzar de cero
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// inicia el juego
// mensaje de saludo para  el usuario del juego
let style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "SI ERES UN ESTUDIANTE DEL DOJO...", style);
console.log("%c" + "BUENA SUERTE, ESTE ES UN DESAFÍO!", style);
// muestra el dojo con el fin de depurarlo
// console.table(theDojo);
// agrega las filas de botones en <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

