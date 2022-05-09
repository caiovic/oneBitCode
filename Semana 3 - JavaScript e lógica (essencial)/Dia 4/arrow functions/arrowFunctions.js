/* 

 São um terceiro tipo de função, porém, com sintaxe reduzida.

 também são funções anônimas.



*/

const doubleVelocity = velocity => {
  return velocity * 2
}

console.log(doubleVelocity(60))

// é possível simplificar mais ainda caso tenha somente uma linha:
// const doubleVelocity2 = (velocity2)=> velocity2 * 2
//console.log(doubleVelocity2(80))

// ainda é possível simplificar mais ainda, tirando os parênteses da function:
//       function       parâmetro        retorno
const doubleVelocity2 = velocity2 => velocity2 * 2
console.log(doubleVelocity2(80))
