// também é possível definir um valor padrão no constructor, como nas functions:
// consideramos que um valor pré definido é como se fosse um default, algo colocado de forma padrão quando não se declara um valor, tipo um undefined, só que escrito algo.

class NaveEspacial {
  constructor(nome, tipo = 'Desoberta') {
    this.nome = nome
    this.tipo = tipo
  }
}

let nave = new NaveEspacial('Elemental')
let nave2 = new NaveEspacial('Helmet', 'Batalha')

console.log(nave) // NaveEspacial { nome: 'Elemental', tipo: 'Desoberta' }

console.log(nave2) // NaveEspacial { nome: 'Helmet', tipo: 'Batalha' }
