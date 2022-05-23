//Reduce

const numero = [2,10,20,50];

const acumuladorDoble = (acumulador,numeros) => [...acumulador, numeros*2];
const doubles = numero.reduce(acumuladorDoble,[]);

console.log(doubles);