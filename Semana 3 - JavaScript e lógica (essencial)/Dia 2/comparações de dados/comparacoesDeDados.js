// comparador igual ==
let spaceship = 'Golias'
let velocity = 80

console.log(spaceship == velocity) // false
console.log(spaceship == 'Golias') // true
console.log(velocity == 90) // false
console.log(velocity == '80') // true mesmo sendo string

// comparador de exatidão ===
console.log(velocity === '80') // false, pois o atributo não é um número e sim uma string
console.log(velocity === 80) // true

// comparador de diferença !=
console.log(velocity != 80) // false, pois ele não é diferente de 80
console.log(velocity != '80') // false, pois ele não leva em consideração se é um número

// comparador de diferença exata !==
console.log(velocity !== '80') // true, pois agora ele considera não ser um número

// comparador maior que >
console.log(velocity > 70) // true
console.log(spaceship > 'Helmet') // false, pois o G não vem depois do H
console.log(spaceship > 'Falcon') // true, pois G vem depois de F

// comparador maior ou igual que >=
console.log(velocity >= 90) // false, pois 80 não é maior nem igual a 90
console.log(velocity >= 80) // true
console.log(spaceship >= 'Golias') // true

// comparador menor que <
console.log(velocity < 120) // true
console.log(spaceship < 'Helmet') // true, G vem antes de H

// comparador menor ou igual que <=
console.log(velocity <= 130) // true
console.log(spaceship <= 'Helmet') // true
