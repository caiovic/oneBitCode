// .forEach - percorre uma array que você chamar

let carros = ['Gol', 'Corsa', 'Fusca', 'Paraty']

carros.forEach(function (nomeCarros, indice) {
  console.log(
    'Nome do carro: ' +
      nomeCarros +
      '\nIndice em que se encontra no array: ' +
      indice
  )
})

// o primeiro parâmetro na function recebe o que tem dentro de cada indice
// o segundo retorna o indice de fato
