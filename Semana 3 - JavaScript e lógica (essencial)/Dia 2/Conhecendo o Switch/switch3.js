/* 
  é possível utilizar cases vazios.
  Neste caso, o switch busca o case que mais representa a velocity em questão,
  que no caso seria o switch 90, porém, ele continua executando até que ocorra
  a execução de um break
*/

let velocity = 90

switch (velocity) {
  case 70:
    console.log('Velocidade baixa')
  /* aqui ele passaria reto mesmo não tendo o break,
  pois ele não atende os requisitos do switch*/
  case 80:
  case 90:
  case 100:
    console.log('Velocidade aceitável')
    break // sem esse break, todos os console.log seguinte seriam executados exceto o default
  case 110:
    console.log('Velocidade alta, mas aceitável')
    break
  default:
    console.log('Velocidade não identificada')
}

// ele executa todos os breaks após executar todos os cases
