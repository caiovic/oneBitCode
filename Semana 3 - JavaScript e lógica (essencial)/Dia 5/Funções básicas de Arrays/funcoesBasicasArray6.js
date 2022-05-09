// .indexOf mostra a posição que um determinado elemento está em uma array

let carros = ['Gol', 'Corsa', 'Fusca', 'Paraty']

console.log(carros.indexOf('Fusca')) // 2

// também é possivel armazenar essa informação em uma variável:

let posicaoCorsa = carros.indexOf('Corsa')

console.log(posicaoCorsa) // 1

// caso ele não encontre o valor desejado, ele retorna -1:

let posicaoFiatUp = carros.indexOf('Fiat Up')

console.log(posicaoFiatUp) // -1
