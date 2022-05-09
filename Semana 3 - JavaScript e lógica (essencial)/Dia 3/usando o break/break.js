// o break também pode ser usado para encerrar uma estrutura de repetição

let spaceshipName = 'Supernova'

for (let i = 0; i < spaceshipName.length; i++) {
  if (spaceshipName[i] == 'o') {
    break
  } else {
    console.log(spaceshipName[i])
  }
}
