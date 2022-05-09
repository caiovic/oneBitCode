let velocity = 0
let newVelocity = ''
let newVelocity2 = ''
let spaceshipName = prompt('Olá navegador! Digite o nome da nave abaixo:')

function menu() {
  let chosenOption = prompt(
    'Escolha uma das opções abaixo: \n\n1 - Acelerar a nave em 5 Km/s \n2 - desacelerar em 5 Km/s \n3 - Imprimir dados de bordo \n4 - Sair do programa'
  )
  escolhas(chosenOption)
}

function escolhas(chosenOption) {
  switch (chosenOption) {
    case '1': {
      newVelocity = velocity + 5
      velocity = newVelocity
      menu()
      break
    }
    case '2': {
      if (velocity > 0 && velocity >= 5) {
        newVelocity2 = velocity - 5
        velocity = newVelocity2
        menu()
        break
      } else {
        alert(
          'Impossível subtrair, pois estamos abaixo da velocidade ou parados'
        )
        menu()
        break
      }
    }
    case '3': {
      alert(
        'Nave: ' + spaceshipName + '\nVelocidade Atual: ' + velocity + ' Km/s'
      )
      menu()
      break
    }
    case '4': {
      if (chosenOption == '4') {
        turnOff()
        break
      } else {
        menu()
        break
      }
    }
    default: {
      alert('Número incorreto! Digite um número válido')
      menu()
      break
    }
  }
}

menu()

function turnOff() {
  alert('Desligando aplicação...')
}
