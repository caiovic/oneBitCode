// Outro jeito de criar uma array

let tiposDeNaves = new Array('Supernova', 'Elemental', 'Helmet', 'Colossus')
let numeros = new Array(1, 2, 3, 4)
console.log(tiposDeNaves)
console.log(numeros)

// um new Array com apenas um número entre os parênteses retornaria um
// array com a quantidade de espaços do número, e não o número em si:

let numero = new Array(5)

console.log(numero) // [ <5 empty items> ]

/*
  Em resumo, é bom só usa-lo quando quiser criar um array vazio, caso não, 
  use um array normal
*/

let teste = new Array()

console.log(teste) // []
