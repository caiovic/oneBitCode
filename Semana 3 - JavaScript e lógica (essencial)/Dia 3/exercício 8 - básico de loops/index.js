alert(
  'Bem vindo de volta, piloto! \nVamos agora inverter o nome de sua nave, mas primeiro...'
)

let spaceshipName = prompt('Qual o nome da sua nave?')
let newSpaceshipName = ''

for (let i = spaceshipName.length - 1; i >= 0; i--) {
  if (spaceshipName[i] == 'e' || spaceshipName[i] == 'E') {
    break
  } else {
    newSpaceshipName += spaceshipName[i]
  }
}

alert(
  'Antigo nome da nave: ' +
    spaceshipName +
    '\nNovo nome da nave: ' +
    newSpaceshipName
)

// abobora (7 letras) - 0 1 2 3 4 5 6
// aroboba 6 5 4 3 2 1 0
