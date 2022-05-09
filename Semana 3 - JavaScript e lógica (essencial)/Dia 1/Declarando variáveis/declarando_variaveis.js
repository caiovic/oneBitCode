// variável / nome da variável / valor da variável
let nome = 'Caio'
console.log(nome)

// Sobrescrevendo o valor da variável

nome = 'Victor'
console.log(nome)

// variável que não altera o valor

const sobrenome = 'Costa lima'
console.log(sobrenome)

// atribuir um novo valor em uma const não funciona
// sobrenome = 'Lima Costa'

// var, uma variável igual ao let

var nomeCompleto = 'Caio Victor Costa Lima'
console.log(nomeCompleto)

// é mutável

nomeCompleto = 'Caio V C L'
console.log(nomeCompleto)

// é possível declarar uma variável vazia

var noValue = ''
console.log(noValue)

// tem como armazenar o que retorna (como no curso da alura imersão dev)
// a variável confirm e prompt retornam algo

let retorno = confirm('Nave pronta para decolar. Aguardando confirmação')
console.log(retorno) // nesse caso abriria a janela do confirm, que tem duas opções:
// ok (true) e cancel (false). a variável armazenaria um desses booleanos

let retorno2 = prompt('Qual seu nome?')
console.log(retorno2)
