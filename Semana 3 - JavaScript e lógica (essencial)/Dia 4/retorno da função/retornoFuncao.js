/* 
 o return armazena o valor 
 que foi efetuado na function, no caso, no newVelocity 
 que armazenaria o valor 120
*/

function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration
  console.log('Nova velocidade: ' + newVelocity)
  return newVelocity
}

speedUp(100, 20) // 120
