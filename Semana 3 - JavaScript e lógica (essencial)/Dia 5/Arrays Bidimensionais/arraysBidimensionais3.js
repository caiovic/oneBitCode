// é possível acessar um array dentro de um array dentro de um array (uuuuuuuuh)
// Array tridimensional

let escolas = [
  ['Guerreiro', 100, 'Praia grande'],
  ['Objetivo', 200, 'Santos'],
  ['Fortec', 500, 'São Vicente'],
  ['C.O.C', [1000, 'Mongaguá']]
]

console.log(escolas[3][1][0])
// 3 - c.o.c
// 1 - array dentro do 3
// 0 - 1000

// resultado = 1000
