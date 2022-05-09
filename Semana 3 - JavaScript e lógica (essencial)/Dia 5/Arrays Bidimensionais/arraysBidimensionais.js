// é possivel armazenar um array dentro de um array

let escolas = [
  ['Guerreiro', 100, 'Praia grande'],
  ['Objetivo', 200, 'Santos'],
  ['Fortec', 500, 'São Vicente'],
  ['C.O.C', 1000, 'Mongaguá']
]

console.table(escolas) // uma tabela muito massa no console

console.log(escolas[2])

// continua sendo possível realizar qualquer tipo de função, como o .push:

escolas.push('Santa Cecília', 2500, 'Guarujá')

console.table(escolas)

console.log(escolas[4]) // escola adicionada
