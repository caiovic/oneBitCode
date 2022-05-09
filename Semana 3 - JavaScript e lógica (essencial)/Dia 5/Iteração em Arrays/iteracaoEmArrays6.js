/*

 O método findIndex() retorna o índice no array do primeiro elemento que satisfizer 
 a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento 
 passou no teste.

*/

const navesEngatadas = [
  ['Fenix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false]
]

let plataformaSemEngate = navesEngatadas.findIndex(naves => {
  return naves[2] == false
})

console.log(plataformaSemEngate) // helmet
