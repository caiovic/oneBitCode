let naves = {
  nome: 'Fênix',
  qntTripulantes: 7,
  tipo: 'Batalha'
}

console.log(naves) // { nome: 'Fênix', qntTripulantes: 7, tipo: 'Batalha' }

// é possível adicionar depois uma nova propriedade:

naves.engate = false

console.log(naves) // { nome: 'Fênix', qntTripulantes: 7, tipo: 'Batalha', engate: false }

// outra maneira de adicionar uma nova propriedade:

naves['nivelDeEscudo'] = 100

console.log(naves) // {nome: 'Fênix', qntTripulantes: 7, tipo: 'Batalha', engate: false, nivelDeEscudo: 100}

// chamando:

console.log(naves['engate']) // false

console.log(naves.nivelDeEscudo) // 100
