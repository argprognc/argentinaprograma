/*
1. Escribir un programa que:
    a. Defina una variable nombre.
    b. Guarde en la variable nombre tu nombre real.
    c. Defina y asigne, en un mismo paso, la variable apellido. El valor a
    asignar deberá ser tu apellido real.
    d. Repita el paso anterior, pero esta vez definiendo la variable edad y
    asignandole tu edad real.
    e. Por último, imprime por consola un mensaje que respete el siguiente
    formato:
    "Hola, [nombre] [apellido]. Tienes [edad] años."
    Este programa deberá ser guardado en un archivo llamado
    miNombreCompleto.js
*/

let nombre = "Nicolás";
let apellido = "Chavez";
let edad = 33;
console.log("Hola, %s %s. Tienes %i años.",nombre,apellido,edad);