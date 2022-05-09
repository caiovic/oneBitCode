let nave = {
  nome: 'Deméter',
  tipo: 'Extração',
  ligandoNave: function () {
    console.log('Ligando a nave')
    console.log('Ligando computador de bordo')
  }
}

// chamando uma function dentro de um objeto:
nave.ligandoNave()

// adicionando function a um object de fora:

nave.velocidade = 0
nave.aumentandoVelocidade = function (nave, aceleracao) {
  nave.velocidade += aceleracao
}

// chamando a function:

console.log(nave) // velocidade em 0

nave.aumentandoVelocidade(nave, 10)

console.log(nave) // velocidade em 10
