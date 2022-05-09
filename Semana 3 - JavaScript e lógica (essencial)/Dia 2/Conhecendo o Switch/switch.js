// Switch cria uma linha de casos, onde pode avaliar qual corresponde mais a condição desejada

let velocity = 80

switch (velocity * 2) {
  case 100: // isso é um caso
    console.log('Sua velocidade é 100Km/h')
    break // é uma quebra, caso o case não sirva ou precise parar nele
  case 160:
    console.log('Sua velocidade é 160Km/h')
    break
  default: // isso ocorrerá caso nenhum dos cases servir
    console.log('Velocidade não identificada')
}
