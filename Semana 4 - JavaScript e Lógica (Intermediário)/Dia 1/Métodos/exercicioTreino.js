class Carro {
  constructor(nome, ano, modelo) {
    this.nome = nome
    this.ano = ano
    this.modelo = modelo
    this.kmRodado = 0
  }

  aumentarKmRodado(aceleracao) {
    this.kmRodado += aceleracao
  }

  reduzirKmRodado(desaceleracao) {
    this.kmRodado -= desaceleracao
  }
}

let corsa = new Carro('Corsa', 2001, 'Sedan')

console.log(corsa) // Carro { nome: 'Corsa', ano: 2001, modelo: 'Sedan', kmRodado: 0 }

corsa.aumentarKmRodado(100)

console.log(corsa) // Carro { nome: 'Corsa', ano: 2001, modelo: 'Sedan', kmRodado: 100 }

corsa.reduzirKmRodado(50)

console.log(corsa) // Carro { nome: 'Corsa', ano: 2001, modelo: 'Sedan', kmRodado: 50 }
