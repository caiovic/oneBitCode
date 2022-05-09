// .filter filtra os elementos do array
// ele aguarda o callback booleano, ou seja, true or false para saber se
// o elemento passou no filter ou não

/*

  o filter passa por cada array dentro do array
  o que é necessário definir, por exemplo, em um array bidimensional que
  possua mais de um elemento dentro de si, é qual elemento vai ser representado
  para efetuar sua execução


  no exemplo abaixo, como é um array simples ele não precisa de muitos detalhes

*/

let carros = ['Gol', 'Corsa', 'Fusca', 'Paraty']

let carroCom5Caracteres = carros.filter(elemento => {
  return elemento.length == 5
}) // retorna os elementos do array que tiverem tamanho 5

console.log(carroCom5Caracteres)

let pessoas = [
  ['Caio', 23, 'Programador'],
  ['Madu', 20, 'Designer'],
  ['Italo', 23, 'Dançarino']
]

let idades = pessoas.filter(idade => {
  return idade[1] != 20
})

console.log(idades)
