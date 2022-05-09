/* 

  for

for (<variável>; <expressão>; <ação de controle>) {
  <bloco de código>
}


*/

// exemplo de for: substituindo "e" por "i" em uma string

let spaceship = 'Helmet'
let newSpaceship = ''

for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == 'e') {
    newSpaceship += 'i'
  } else {
    newSpaceship += spaceship[i]
  }
}

console.log(newSpaceship)
