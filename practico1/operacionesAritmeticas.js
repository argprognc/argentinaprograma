/*
3. Operadores aritméticos:
    a. Crea cuatro variables que contengan valores numéricos.
    b. Suma las dos primeras variables y guarda el resultado en otra variable.
    c. Resta la cuarta variable de la tercera y almacena el resultado en otra
    variable.
    d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
    resultado en una variable llamada resultadoFinal. El producto debe ser
    44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
    e. Escribe un cálculo que verifique si resultadoFinal es un número par.
    Almacene el resultado en una variable llamada esPar.
    f. Imprima por consola un mensaje con el siguiente formato:
    “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
    respuesta a verificar si el resultado final es par es: [esPar]”
    g. Deberá guardar este programa en un archivo llamado
    operacionesAritmeticas.js
*/

let var1 = 4;
let var2 = 7;
let var3 = 1;
let var4 = 5;

let resultado_1 = var1 + var2;
let resultado_2 = var4 - var3;

let resultadoFinal = resultado_1 * resultado_2;

let esPar = "no se todavía"
if (resultadoFinal / 2 === 0){
    esPar = "No es par";
}else{esPar = "Es impar"};

console.log(resultadoFinal);
console.log("Mis variables iniciales fueron: "+var1+", "+var2+", "+var3+" y "+var4+". La respuesta a verificar si el resultado final es par es: "+esPar);