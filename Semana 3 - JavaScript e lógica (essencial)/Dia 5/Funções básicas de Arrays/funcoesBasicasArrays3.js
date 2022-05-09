// .shift remove o elemento da primeira posição

let carros = ['Gol', 'Corsa', 'Fusca', 'Paraty']

console.table(carros)

// carros.shift() // removeu o "Gol"

// console.table(carros) // tabela sem o "gol"

// ela também retorna o que foi removido:

let carroRemovido = carros.shift()

console.table(carros)

console.log(carroRemovido)

// o elemento "corsa" passa a ser a posição 0 do array
