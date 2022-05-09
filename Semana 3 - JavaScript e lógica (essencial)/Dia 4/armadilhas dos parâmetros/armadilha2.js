// problemas na sequência de parâmetros:
function speedUp(velocity, unit = 'Km/s', acceleration) {
  let newVelocity = velocity + acceleration
  console.log('Nova velocidade: ' + newVelocity + unit)
}

speedUp(50, 20) // resultado: NaN20 (not a number)
// velocity recebe 50, unit é substituido por 20 e acceleration fica zerado

//---------------------------------------------------------------------------------------------------------------
