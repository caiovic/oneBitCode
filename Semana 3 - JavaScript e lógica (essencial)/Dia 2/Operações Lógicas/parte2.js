// TABELAS VERDADE

/* 

Tabela Verdade (AND) &&
V e V = V
V e F = F
F e V = F
F e F = F

Tabela Verdade (OR) ||
V ou V = V
V ou F = V
F ou V = V
F ou F = F

Tabela Verdade (NOT)
V = F
F = V

*/

let spaceship = 'Elemental'
let velocity = 20

// AND &&
console.log(spaceship.length == 9 && velocity > 15) // true, pois ambas são verdadeiras
// V e V = V]
console.log(velocity > 10 && velocity < 19) // False
// V e F = F
console.log(velocity < 17 && spaceship == 'Elemental') // False
// F e V = F
console.log(spaceship == 'Golias' && veolcity > 21) // false
// F e F = F

// OR ||
console.log(spaceship.length == 9 || velocity > 15) // true, pois ambas são verdadeiras
// V e V = V
console.log(velocity > 10 || velocity < 19) // False
// V e F = V
console.log(velocity < 17 || spaceship == 'Elemental') // False
// F e V = V
console.log(spaceship == 'Golias' || veolcity > 21) // false
// F e F = F

// NOT !
console.log(!(velocity > 19)) // false
// NÃO V = F
console.log(!(velocity < 19)) // true
// NÃO F = V

// Uma expressão grande:
console.log(
  !(velocity > 25 && spaceship == 'Elemental') ||
    (velocity - 3 == 17 && spaceship.length + 1 > 15)
)
/* (! (F && V = F) || (V && F = F))
    (! (F || F = F))
     (!F = V || F)
      (V || F)
       Resposta: Verdadeiro
 */
