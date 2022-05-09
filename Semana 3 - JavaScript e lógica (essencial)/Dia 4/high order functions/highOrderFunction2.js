function doubleVelocity(velocity, printer) {
  console.log('Entrando em doubleVelocity')
  let newVelocity = velocity * 2
  printer(newVelocity)
  return newVelocity
}

let anotherVelocity = doubleVelocity(50, function (velocity) {
  console.log('Outra velocidade: ' + velocity + 'Km/s')
})

console.log(newVelocity) // newVelocity is not defined
