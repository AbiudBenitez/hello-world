const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let tempe, res;

readline.question("¿Cual es tu temperatura?: ", (t) => {
  tempe = parseInt(t);
})
readline.question("Elige la opción deseada: 1.- Celsius, 2.- Fahrenheit", (num) => {
  if (parseInt(num) == 1) {
    res = (num + 32) * 1.8;
  } else {
    res = (num * 1.8) + 32 
  }
})