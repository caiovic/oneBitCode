// .find retorna  primeiro elemento que satisfazer a condição, sem criar
// um novo array como o .filter

let carros = ['Gol', 'Corsa', 'Fusca', 'Paraty']

let carroCom5Caracteres = carros.find(elemento => {
  return elemento.length == 5
}) // retorna o primeiro elemento do array que tiver tamanho 5

console.log(carroCom5Caracteres) // corsa

let carroEspecifico = carros.find(elemento => {
  return elemento[0]
})

console.log(carroEspecifico) // gol
