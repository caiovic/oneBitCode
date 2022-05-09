// é possivel estabelecer parâmetros nas functions, dentro dos parênteses

function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration
  console.log('Nova velocidade: ' + newVelocity)
}

// é possível não estabelecer um padrão sobre as declarações

speedUp(60, 90) // 150

speedUp(10, 10) // 20

speedUp('100', 100) // 200

speedUp('100', '50') // 150

/* 
 para ler strings como números inteiros:


 let newVelocity = parseInt(velocity) + parseInt(aceleration);
  console.log("Nova velocidade: " + newVelocity);

  
*/
