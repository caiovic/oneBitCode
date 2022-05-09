// moment = transforma a data em milissegundo

let dataDePartida = prompt('Qual a data de partida? (formata DD/MM/YYYY)')

let conversaoData = moment(dataDePartida, 'DD/MM/YYYY')

let hoje = moment()

let diferencaDatas = hoje - conversaoData

let opcaoData = prompt(
  'Escolha como gostaria de exibir o tempo de partida: \n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias'
)

if (opcaoData == '1') {
  let segundos = Math.round(diferencaDatas / 1000)
  alert('Tempo de vôo: ' + segundos + ' Segundos')
} else if (opcaoData == '2') {
  let minutos = Math.round(diferencaDatas / 1000 / 60)
  alert('Tempo de vôo: ' + minutos + ' Minutos')
} else if (opcaoData == '3') {
  let horas = Math.round(diferencaDatas / 1000 / 3600)
  alert('Tempo de vôo: ' + horas + ' Horas')
} else if (opcaoData == '4') {
  let dias = Math.round(diferencaDatas / 1000 / 3600 / 24)
  alert('Tempo de vôo: ' + dias + ' dias')
} else {
  alert('Opção inválida')
}
