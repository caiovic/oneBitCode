const naves = [
  ['Fênix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false]
]
// fenix 1
// golias 2
// helmet 3
// elemental 4
// darwin 5

let nomesComMaisDe9Tripulantes = naves.filter(elemento => {
  return elemento[1] > 9
}) // elemento com mais de 9 tripulantes

console.log(nomesComMaisDe9Tripulantes)
