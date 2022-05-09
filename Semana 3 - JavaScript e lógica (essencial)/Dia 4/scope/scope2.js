// Caso declarada dentro de uma função, ela só poderá ser acessada dentro da mesma
// acessada apenas no escopo local

function setVelocitySpaceship() {
  let velocitySpaceship = 0
}

// criando uma variável com o mesmo nome fora de uma função ainda seriam duas diferentes, sem relação

setVelocitySpaceship() // chamada para executar o bloco

console.log(velocitySpaceship) // erro - "velocitySpaceship is not defined"
