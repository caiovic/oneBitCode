let valorFinal = ''
alert('Olá, realize conversões de temperatura')

function temperaturaDigitada() {
  let resultado
  let temperatura = prompt('Qual a temperatura em celcius: ')
  menu()
  return temperatura
}
function menu() {
  let tipo = prompt('Selecione o tipo: \n1 - Fahrenheit \n2 - Kelvin')
  resultado(tipo)
}

function fahrenheit(tipo) {
  if (tipo == '1') {
    novaTemperatura = (temperatura * 9) / 5 + 32
    alert(
      'temperatura antiga: ' +
        temperatura +
        'ºC' +
        '\nTemperatura convertida para fahrenheit: ' +
        novaTemperatura
    )
    return novaTemperatura
  }
}

function kelvin(tipo) {
  if (tipo == '2') {
    novaTemperatura = temperatura + 275.15
    alert(
      'temperatura antiga: ' +
        temperatura +
        'ºC' +
        '\nTemperatura convertida para kelvin: ' +
        novaTemperatura
    )
    return novaTemperatura
  }
}

function resultado(tipo, temperatura) {
  switch (tipo) {
    case '1': {
      resultado = fahrenheit(temperatura, '1')
      temperaturaDigitada()
      break
    }
    case '2': {
      resultado = kelvin(temperatura, '2')
      temperaturaDigitada()
      break
    }
  }
}

temperaturaDigitada()
