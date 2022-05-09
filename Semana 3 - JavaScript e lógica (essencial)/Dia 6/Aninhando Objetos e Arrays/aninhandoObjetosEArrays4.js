// aninhando objetos dentro de objetos

let nave = {
  nome: 'Elemental',
  qntTripulantes: 20,
  capitao: {
    nome: 'Caio',
    idade: 23
  }
}

// acessando o nome do capitão:

console.log(nave.capitao.nome) // Caio
