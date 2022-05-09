function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration
  console.log('Nova velocidade: ' + newVelocity)
  return newVelocity
}

let velocity = 50
let acceleration = 5

console.log(velocity) // 50

velocity = speedUp(velocity, acceleration)

console.log(velocity) // 55
