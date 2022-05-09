let spaceshipName = prompt('Qual o nome da espaçonave?')
let question = ''
let qnt = 0

question = prompt('Deseja realizar a dobra espacial? \n1 - Sim \n2 - Não')

while (question == '1') {
  qnt += 1
  question = prompt('Deseja realizar a proxima dobra? \n1 - Sim \n2 - Não')
}

alert(
  'Nome da nave: ' +
    spaceshipName +
    '\nQuantidade de vezes que realizou dobras: ' +
    qnt
)
