// ela tem o nome omitido na hora da criação
// é possível armazenar funções anônimas dentro de uma variável

let doubleSpeed = function (velocity) {
  return velocity * 2
} // a variável se torna uma função

let newVelocity = doubleSpeed(40)

console.log(newVelocity) // 80
