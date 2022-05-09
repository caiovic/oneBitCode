// slice

// significa fatiar ou dividir

// extrai uma parte do array sem alterar o array inicial

/* a sintaxe desse modo é:

   arr.slice ([begin[,...end]])
   
*/

// possui um primeiro parâmetro que é o indice inicial
// O segundo parâmetro é o indice final
// Retorna todos os elementos entre  indice de inicio "Begin" e o final "end"

let deusesGregos = ['Zeus', 'Artemis', 'Afrodite', 'Hércules', 'Hades']

let usandoSlice = deusesGregos.slice(1, 3) // begin = artemis / end = Hercules

console.table(usandoSlice) // artemis, afrodite
console.table(deusesGregos) // table normal
