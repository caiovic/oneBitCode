/*

 basicamente quando declaramos um let fora de uma function, ele pode ser acessado de qualquer 
 lugar, possuindo um escopo global 

exemplo:

*/
let spaceshipName = 'Supernova'

function changeSpaceshipName() {
  spaceshipName = 'Elemental'
}

console.log(spaceshipName) // "Supernova"

changeSpaceshipName() // "Elemental"

console.log(spaceshipName) // "Elemental"
