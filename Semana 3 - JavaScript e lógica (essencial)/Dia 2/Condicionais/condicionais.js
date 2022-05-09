let velocity = 101
// São um bloco de códigos

// if (se) e' else (senão)
// OBS: else não existe sem o if, mas o contrário sim
if (velocity < 100) {
  console.log('Estamos em uma velocidade aceitável')
} else {
  console.log('Reduza a velocidade!')
}

// é possivel encadear uma dentro da outra
if (velocity < 40) {
  console.log('Velocidade muito baixa')
} else if (velocity <= 90) {
  console.log('Cuidado! limite máximo alcançado')
} else {
  console.log('Velocidade excedida!!')
}

// Operador ternário (if de 1 linha) só é recomendado usar quando a expressão for pequena.
velocity > 100
  ? console.log('Velocidade maior que 100')
  : console.log('Velocidade menor que 100')
