let nomeMaisVelha = prompt('Qual o nome da pessoa mais velha?')
let idadeMaisVelha = prompt('Qual a idade da pessoa mais velha?')
let nomeMaisNova = prompt('Qual o nome da pessoa mais nova?')
let idadeMaisNova = prompt('Qual a idade da pessoa mais nova?')

let diferenca = idadeMaisVelha - idadeMaisNova

alert(
  'Nome pessoa mais velha: ' +
    nomeMaisVelha +
    '\nIdade da pessoa mais velha: ' +
    idadeMaisVelha +
    '\n\nNome pessoa mais nova: ' +
    nomeMaisNova +
    '\nIdade da pessoa mais nova: ' +
    idadeMaisNova +
    '\n\nDiferença de idade: ' +
    diferenca +
    ' anos.'
)
