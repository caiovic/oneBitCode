let spaceship = 'Elemental'

switch (spaceship) {
  case 'Golias':
    console.log('Nave mais resistente')
  case 'Elemental': // executado
    console.log('Nave com melhor armamento')
  case 'Helmet': // executado
    console.log('Rápida ativação de escudo')
  case 'Frontier': // executado
    console.log('Nade de infantaria')
    break
  case 'Enterprise':
    console.log('Nave a frota estelar')
  default:
    console.log('Desconheço esta nave')
}
