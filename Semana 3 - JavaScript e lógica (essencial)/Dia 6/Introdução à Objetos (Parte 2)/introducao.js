// Qualquer valor pode ser atribuido na propriedade, seja string, number, boolean

let carro = {
  nome: 'Corsa',
  'qnt Portas': 2, // obs, evitar propriedades com espaçamento
  2: 'sim', // evitar números assim
  true: false // evitar booleanos
}

// porém, alguns erros podem ocorrer:

//console.log(carro.2) // SyntaxError: missing ) after argument list
// ele é interpretado como number, logo causa um erro

// forma correta de chamar:

console.log(carro['2']) // sim

console.log(carro)
