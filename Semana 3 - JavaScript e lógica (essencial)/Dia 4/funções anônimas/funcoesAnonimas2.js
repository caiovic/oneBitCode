// uma função tradicional é lida antes de tudo no escopo do código, por isso o
// console.log(speedUp(60, 10)) é executado
// já uma função declarada dentro de um let só é executado no momento em que aparece no escopo

console.log(speedUp(60, 10)) // 70, executada normalmente
console.log(doubleSpeed(50)) // ReferenceError: Cannot access 'doubleSpeed' before initialization

let doubleSpeed = function (velocity) {
  return velocity * 2
} // a variável se torna uma função
// lida somente na ordem do escopo
// seguem a regra de uma variável let

function speedUp(velocity, acceleration) {
  return velocity + acceleration
} // lida antes de tudo no código
