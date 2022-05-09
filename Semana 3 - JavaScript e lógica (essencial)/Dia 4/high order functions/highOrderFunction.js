// Significa "Função de alta classe"

/* 
 
  - São funções que recebem ou retornam outras funções.

  - As funções que o HOF recebe geralmente são anônimas.
    (podendo ser uma arrow function ou não).
 
  - A função que é enviada como o parâmetro de uma HOF é chamado de callback

*/

function doubleVelocity(velocity, printVelocity) {
  console.log('Entrando em doubleVelocity')
  let newVelocity = velocity * 2
  printVelocity(newVelocity)
  return newVelocity
}

let printVelocity = velocity => {
  console.log('Nova velocidade: ' + velocity + 'Km/s') // recebe o printer(newVelocity)
} // callback, pois está sendo chamado dentro da function e colocado como parâmetro

let newVelocity = doubleVelocity(60, printVelocity) // recebe o retorno

console.log(newVelocity)
