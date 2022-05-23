//Reducer

const numero = [2,10,20,50];

let acumulador = (acumulador,num) => acumulador + num;
let total = numero.reduce(acumulador);
console.log(total);