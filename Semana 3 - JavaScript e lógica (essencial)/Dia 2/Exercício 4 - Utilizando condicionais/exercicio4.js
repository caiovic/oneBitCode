let velocity = 0
let pilotName = prompt('Boas vindas! \nQual seu nome, piloto(a)?')
let newVelocity = prompt(
  'Atualmente estamos parados. \nA que velocidade gostaria de acelerar a nave?'
)
let confirmation = confirm(
  'Acelerando para ' + newVelocity + 'Km/s. \nDevemos prosseguir?'
)
if (confirmation) {
  velocity = newVelocity
}

if (velocity <= 0) {
  alert('A nave está parada! \nConsidere partir e aumentar a velocidade')
} else if (velocity <= 40) {
  alert('Você está devagar. \nConsidere aumentar mais a velocidade.')
} else if (velocity >= 40 && velocity < 80) {
  alert('Você está em uma boa velocidade. \nConsidere mantê-la.')
} else if (velocity >= 80 && velocity < 100) {
  alert('Velocidade alta! \nConsidere reduzir.')
} else if (velocity >= 100) {
  alert('Velocidade de risco! \nControle automático forçado.')
}

alert(
  'Nome do piloto: ' + pilotName + '\nVelocidade atual: ' + velocity + 'Km/s'
)
