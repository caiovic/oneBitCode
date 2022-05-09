// Resolvendo problema de sequência
function speedUp(velocity, acceleration, unit = 'Km/s') {
  let newVelocity = velocity + acceleration
  console.log('Nova velocidade: ' + newVelocity + unit)
}

speedUp(50, 20) // resultado: Nova velocidade: 70 Km/s

// alterando a ordem

// todos valor padrão precisa estar em ultimo
