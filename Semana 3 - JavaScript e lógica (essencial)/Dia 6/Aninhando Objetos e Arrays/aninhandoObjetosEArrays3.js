// percorrendo todos os os objetos dentro do array
let naves = [
  { nome: 'Elemental', qntTripulantes: 15 },
  { nome: 'Supernova', qntTripulantes: 10 },
  { nome: 'Colossus', qntTripulantes: 8 }
]

naves.forEach(naves => {
  console.log(naves.nome + ' Tem ' + naves.qntTripulantes + ' Tripulantes.')
})
