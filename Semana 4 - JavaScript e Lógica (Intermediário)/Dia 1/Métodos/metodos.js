// metodo dentro da classe

class carro {
  constructor(nome) {
    this.nome = nome
    this.velocidade = 0
  }

  aumentarVelocidade(aceleracao) {
    this.velocidade += aceleracao
  }
}

let corsa = new carro('Corsa')

console.log(corsa) // carro { nome: 'Corsa', velocidade: 0 }

// chamando o método dentro da classe para celerar o corsa:

corsa.aumentarVelocidade(10)

console.log(corsa) // carro { nome: 'Corsa', velocidade: 0 }

corsa.aumentarVelocidade(50)

console.log(corsa) // carro { nome: 'Corsa', velocidade: 60 }

// tudo isso segue a mesma regra de definir uma função normalmente
