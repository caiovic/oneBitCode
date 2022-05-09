function setSpaceshipDetails() {
  console.log(spaceshipName) // Undefined
  console.log(spaceshipType) // Cannot access 'spaceshipType' before initialization
  var spaceshipName = 'Elemental' // o var joga para o topo da função, em primeiro lugar, mas continua undefined
  let spaceshipType = 'Discovery' // a variavel só é declarada na hora que aparece, sem prioridade
  console.log(spaceshipName) // undefined
  console.log(spaceshipType) // não vai ser executado, pq foi solicitado antes na mesma função
}

setSpaceshipDetails()

/* 

o var ele tem um escopo que pode ser alterado em qualquer parte do código, mesmo que você 
coloque ele dentro de uma função. O let não, o escopo do let fica preso no contexto onde 
ele está, tornando isso mais seguro, pois caso você queira alterar o mesmo let em outra 
função, não vai conseguir.

*/
