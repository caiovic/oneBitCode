/* 

  do while

do {
  <bloco de código>
} while (<condição>) 


o do while só avalia a expressão lógica no fim dela

*/

let velocity = 100
let acceleration = 5

do {
  console.log('Acelerando... Estamos a ' + velocity + 'Km/s') // 1 executa
  velocity += acceleration // 3 depois soma
} while (velocity <= 100) // 2 avalia - nesse caso ele é maior que 100, mas seria executado pelo menos uma vez
