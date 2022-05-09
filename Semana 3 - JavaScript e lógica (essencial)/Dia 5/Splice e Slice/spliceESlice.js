//  Splice

// Significa "Imendar" ou "Costurar"

// Substitui o array original

// Espera um primeiro parâmetro que é o indice do array
// O segundo é a quantidade de elementos que queremos remover a partir desse índice
// Os próximos são os elementos que queremos adicionar no lugar
// apenas o primeiro árâmetro é 'obrigatório'

// array.splice = (index[, deletCount[, elemento1[, ...elementoN]]])

let deusesGregos = ['Zeus', 'Artemis', 'Afrodite', 'Hércules', 'Hades']

console.table(deusesGregos)

// agora é selecionar aquilo que não quer no array e substituir

let deletarDeuses = deusesGregos.splice(1, 2, 'Aries', 'Atena')
// 1 = "Artemis"
// 2 = "Afrodite"
// Substitui esses dois e coloca no lugar os 3 seguintes, ficando
// ['Zeus', "Aries", "Atena", 'Hércules', 'Hades']

console.table(deletarDeuses) // retorna artemis e afrodite
console.table(deusesGregos) // ['Zeus', "Aries", "Atena", 'Hércules', 'Hades']
