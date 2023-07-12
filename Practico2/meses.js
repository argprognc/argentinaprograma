const readlineSync = require('readline-sync');
const mes = parseInt(readlineSync.question('Ingrese un número del 1 al 12: '));

let cantidadDeDias;

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    cantidadDeDias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    cantidadDeDias = 30;
    break;
  case 2:
    cantidadDeDias = 28;
    break;
  default:
    console.log('Número de mes inválido');
    process.exit(1);
}

console.log(`La cantidad de días del mes de ${mes} es ${cantidadDeDias}`);