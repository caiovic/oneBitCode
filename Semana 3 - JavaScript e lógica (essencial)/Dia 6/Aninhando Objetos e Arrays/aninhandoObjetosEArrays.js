// aninhar é um termo na programação para se referir quando um determinado elemento está coberto por outro
/*
exemplos:
- array dentro de objeto
- objeto dentro de array
- array dentro de array
- objeto dentro de objeto
etc
*/

// array dentro de um objeto
let nave = {
  nome: 'Supernova',
  tipo: ' Batalha',
  tripulantes: ['Cap. Silva', 'Ana Júlia', 'Mario Gomes']
}

console.log(nave)

// adicionando um novo tripulante ao array "tripulantes" dentro do objeto "nave":

nave.tripulantes.push('Ten. Fernanda')

console.log(nave)
