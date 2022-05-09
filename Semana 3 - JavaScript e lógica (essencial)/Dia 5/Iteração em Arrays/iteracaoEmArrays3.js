// .map modifica os elementos de um array um a um sem alterar o array original

// ele percorre todo o array, altera cada parte com base no retorno do callback,
// pega o novo array gerado e retorna

let carros = ['gol', 'corsa', 'fusca', 'paraty']

let nomeDosCarrosEmMaiusculo = carros.map(function (nomeDentroDoArray, indice) {
  let letraMaiuscula = nomeDentroDoArray.toUpperCase() // retorna tudo em maiúsculo
  return letraMaiuscula
})

console.log(nomeDosCarrosEmMaiusculo) // [ 'GOL', 'CORSA', 'FUSCA', 'PARATY' ]
