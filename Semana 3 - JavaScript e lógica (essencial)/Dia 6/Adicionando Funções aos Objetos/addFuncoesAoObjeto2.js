// acessando o objeto especifico sem precisar chamar toda o objeto
let nave = {
  nome: 'Deméter',
  tipo: 'Extração',
  ligandoNave: function () {
    console.log('Ligando a nave')
    console.log('Ligando computador de bordo')
    console.log(this.name)
  }
}

// utilizando this para acessar uma propriedade especifica dentro do objeto
nave.velocidade = 0
nave.aumentandoVelocidade = function (aceleracao) {
  this.velocidade += aceleracao
}

// chamando a function:

console.log(nave) // velocidade em 0

nave.aumentandoVelocidade(10) // não é necessario nada alem da acceleration

console.log(nave) // velocidade em 10
