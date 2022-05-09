// sem o return, o segundo valor daria undefined, pq nenhum valor foi armazenado após a execuçãoo da function
// basicamente foi como se ela não tivesse acontecido após a função

function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration
  console.log('Nova velocidade: ' + newVelocity)
}

let velocity = 50
let acceleration = 5

console.log(velocity) // 50

velocity = speedUp(velocity, acceleration)

console.log(velocity) // undefined
