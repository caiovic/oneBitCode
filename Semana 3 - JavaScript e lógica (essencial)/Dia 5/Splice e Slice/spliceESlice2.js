// é possível também remover com o slice, mas sem declarar novos parâmetros:

let deusesGregos = ['Zeus', 'Artemis', 'Afrodite', 'Hércules', 'Hades']

console.table(deusesGregos) // tabela completa

let deletarDeuses = deusesGregos.splice(1, 2)

console.table(deletarDeuses) // artemis, afrodite
console.table(deusesGregos) // tabela sem artemis e afrodite
