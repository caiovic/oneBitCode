// o var leva a variável para o mesmo nível da função
function setSpaceshipDetails() {
  let velocity = 50
  if (velocity == 50) {
    velocity = 60
    var spaceshipName = 'Elemental'
    let spaceshipType = 'Discovery'
    console.log(spaceshipType) // aqui ela aaprece, pois só pode ser chamada onde foi criada,
    // caso dentro de uma function
  }

  console.log(velocity) // 60
  console.log(spaceshipName) // "Elemental"
  // console.log(spaceshipType) // Erro "spaceshipType is not defined"
  // ela só é declarada na hora em que é feita
}

setSpaceshipDetails()
