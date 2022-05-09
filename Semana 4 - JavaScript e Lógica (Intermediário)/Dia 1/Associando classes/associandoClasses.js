class Capitao {
  constructor(nome, idade, tempoDeVoo) {
    this.nome = nome
    this.idade = idade
    this.tempoDeVoo = tempoDeVoo
  }
}

class Nave {
  constructor(
    nome,
    qntTripulacao,
    capitaoNome,
    capitaoIdade,
    capitaoTempoDeVoo
  ) {
    this.nome = nome
    this.qntTripulacao = qntTripulacao
    this.Capitao = new Capitao(capitaoNome, capitaoIdade, capitaoTempoDeVoo)
  }
}

let nave = new Nave('Artemis', 45, 'Caio Lima', 23, 120)

console.log(nave)
