/* 
 
  while

while (Expressão) {
  <bloco de código a ser executado>
}
  
*/

let velocity = 50
let acceleration = 5

while (velocity <= 100) {
  console.log('Acelerando: Estamos a ' + velocity + 'Km/s')
  velocity += acceleration // velocity = velocity + acceleration
}
