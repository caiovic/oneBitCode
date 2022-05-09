alert(
  'Bem vindo navegador!\nIremos criar um ocultador de nomes para sua aeronave.'
)
let nameSpaceship = prompt('Qual o nome da sua nave?')
let letter = prompt('Qual letra deseja substituir em ' + nameSpaceship + '?')
let newSpaceshipName = ''
let newLetter = prompt('Qual a nova letra?')

for (let i = 0; i < nameSpaceship.length; i++) {
  if (nameSpaceship[i] == letter) {
    newSpaceshipName += newLetter
  } else {
    newSpaceshipName += nameSpaceship[i]
  }
}
alert(
  'Antigo nome da nave: ' +
    nameSpaceship +
    '\nNovo nome da nave: ' +
    newSpaceshipName
)
